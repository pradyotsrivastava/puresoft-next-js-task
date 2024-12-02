"use client";

import { useEffect, useState } from "react";
import ActivityChart from "./components/ActivityChart";
import StatsCard from "./components/StatsCard";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import GroupLeaderboard from "./components/GroupLeaderboard";
import Leaderboard from "./components/Leaderboard";
import TopicCard from "./components/TopicCard";

interface Metrics {
  active_users: {
    current: number;
    total: number;
  };
  questions_answered: number;
  average_session_length_seconds: number;
  starting_knowledge_percentage: number;
  current_knowledge_percentage: number;
}

interface Activity {
  monthly: { month: string; value: number }[];
}

interface Topic {
  name: string;
  image: string;
  correct_percentage: number;
}

interface UserLeaderboard {
  name: string;
  image: string;
  points: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
  rank: number;
}

interface GroupsLeaderboard {
  group_name: string;
  points_per_user: number;
  accuracy_percentage: number;
  previous_accuracy_percentage: number;
}

interface TopicsData {
  weakest: Topic[];
  strongest: Topic[];
}

export default function DashboardPage() {
  const [error, setError] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [topics, setTopics] = useState<TopicsData | null>(null);
  const [userLeaderboard, setUserLeaderboard] = useState<
    UserLeaderboard[] | null
  >(null);
  const [groupsLeaderboard, setGroupsLeaderboard] = useState<
    GroupsLeaderboard[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMetrics = async () => {
    try {
      const response = await fetch("http://localhost:3001/metrics");
      const metrics = await response.json();
      setMetrics(metrics);
    } catch (err) {
      setError("Failed to fetch metrics");
    }
  };

  const fetchActivity = async () => {
    try {
      const response = await fetch("http://localhost:3001/activity");
      const activity = await response.json();
      setActivity(activity);
    } catch (err) {
      setError("Failed to fetch activity");
    }
  };

  const fetchTopics = async () => {
    try {
      const response = await fetch("http://localhost:3001/topics");
      const topics = await response.json();
      setTopics(topics);
    } catch (err) {
      setError("Failed to fetch topics");
    }
  };

  const fetchUserLeaderboard = async () => {
    try {
      const response = await fetch("http://localhost:3001/user_leaderboard");
      const userLeaderboard = await response.json();
      setUserLeaderboard(userLeaderboard);
    } catch (err) {
      setError("Failed to fetch user leaderboard");
    }
  };

  const fetchGroupsLeaderboard = async () => {
    try {
      const response = await fetch("http://localhost:3001/groups_leaderboard");
      const groupsLeaderboard = await response.json();
      setGroupsLeaderboard(groupsLeaderboard);
    } catch (err) {
      setError("Failed to fetch groups leaderboard");
    }
  };

  useEffect(() => {
    fetchMetrics();
    fetchActivity();
    fetchTopics();
    fetchUserLeaderboard();
    fetchGroupsLeaderboard();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-semibold">
        Error: {error}
      </div>
    );
  }

  if (
    !metrics ||
    !activity ||
    !topics ||
    !userLeaderboard ||
    !groupsLeaderboard
  ) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-between bg-white rounded-lg w-full px-4 py-2">
          <h1>Timeframe: <span className="font-semibold">All-time</span></h1>
          <div><TbTriangleInvertedFilled /></div>
        </div>
        <div className="flex items-center justify-between bg-white rounded-lg w-full px-4 py-2">
          <h1>People: <span className="font-semibold">All</span></h1>
          <div><TbTriangleInvertedFilled /></div>
        </div>
        <div className="flex items-center justify-between bg-white rounded-lg w-full px-4 py-2">
          <h1>Type: <span className="font-semibold">All</span></h1>
          <div><TbTriangleInvertedFilled /></div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap md:flex-nowrap w-full">
        <div className="flex w-full md:w-1/2">
          <StatsCard metrics={metrics} />
        </div>
        <div className="flex w-full md:w-1/2">
          <ActivityChart activity={activity?.monthly} />
        </div>
      </div>

      <div className="flex w-full gap-4 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col w-full md:w-1/2  bg-white p-4 rounded-lg gap-4">
          <div className="text-lg font-semibold text-gray-900">
            Weakest Topics
          </div>
          {topics?.weakest.map((item, index) => (
            <TopicCard
              key={index}
              title={item.name}
              imageUrl={item.image}
              correctPercentage={item.correct_percentage}
            />
          ))}
        </div>

        <div className="flex flex-col w-full md:w-1/2 bg-white p-4 rounded-lg gap-4">
          <div className="text-lg font-semibold text-gray-900">
            Strongest Topics
          </div>
          {topics?.strongest.map((item, index) => (
            <TopicCard
              key={index}
              title={item.name}
              imageUrl={item.image}
              correctPercentage={item.correct_percentage}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full gap-4 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col w-full md:w-1/2  bg-white p-4 rounded-lg gap-4">
          <div className="text-lg font-semibold text-gray-900">
            User Leaderboard
          </div>
          {userLeaderboard.map((item, index) => (
            <Leaderboard
              key={index}
              title={item.name}
              imageUrl={item.image}
              points={item.points}
              accuracyPercentage={item.accuracy_percentage}
              previousAccuracyPercentage={item.previous_accuracy_percentage}
            />
          ))}
        </div>

        <div className="flex flex-col w-full md:w-1/2 bg-white p-4 rounded-lg gap-4">
          <div className="text-lg font-semibold text-gray-900">
            Group Leaderboard
          </div>
          {groupsLeaderboard.map((item, index) => (
            <GroupLeaderboard
              key={index}
              title={item.group_name}
              points={item.points_per_user}
              accuracyPercentage={item.accuracy_percentage}
              previousAccuracyPercentage={item.previous_accuracy_percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
