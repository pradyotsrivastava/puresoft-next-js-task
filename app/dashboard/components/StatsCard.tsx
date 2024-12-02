import Image from "next/image";

interface StatsCardProps {
  metrics: {
    active_users: {
      current: number;
      total: number;
    };
    questions_answered: number;
    average_session_length_seconds: number;
    starting_knowledge_percentage: number;
    current_knowledge_percentage: number;
  };
}

export default function StatsCard({ metrics }: StatsCardProps) {
  const knowledgeGain =
    metrics.current_knowledge_percentage -
    metrics.starting_knowledge_percentage;

  const formatQuestionsAnswered = (num: number) => {
    return num.toLocaleString();
  };

  const formatAverageSessionLength = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}sec`;
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between w-full gap-[1%] flex-wrap">
        <div className="bg-white p-4 rounded-2xl h-52 w-full sm:w-[48%] lg:w-[30%] gap-4 flex flex-col mb-4">
          <div className="text-sm text-gray-600 font-bold">Active Users</div>
          <div className="text-2xl font-bold">
            {metrics.active_users.current}
            <span className="text-gray-400 text-xl">
              /{metrics.active_users.total}
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl h-52 w-full sm:w-[48%] lg:w-[30%] gap-4 flex flex-col mb-4">
          <div className="text-sm text-gray-600 font-bold w-full">
            Questions Answered
          </div>
          <div className="text-2xl font-bold w-full">
            {formatQuestionsAnswered(metrics.questions_answered)}
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl h-52 w-full sm:w-[48%] lg:w-[30%] gap-4 flex flex-col mb-4">
          <div className="text-sm text-gray-600 font-bold w-full">
            Av. Session Length
          </div>
          <div className="text-2xl font-bold w-full">
            {formatAverageSessionLength(metrics.average_session_length_seconds)}
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl h-52 w-full sm:w-[48%] lg:w-[30%] gap-4 flex flex-col mb-4">
          <div className="text-sm text-gray-600 font-bold w-full">
            Starting Knowledge ⓘ
          </div>
          <div className="text-2xl font-bold w-full">
            {metrics.starting_knowledge_percentage}%
          </div>
          <Image src="/Graph.svg" alt="Stats Graph" width={300} height={200} className="mt-auto" />
        </div>

        <div className="bg-white p-4 rounded-2xl h-52 w-full sm:w-[48%] lg:w-[30%] gap-4 flex flex-col mb-4">
          <div className="text-sm text-gray-600 font-bold w-full">
            Current Knowledge
          </div>
          <div className="text-2xl font-bold w-full">
            {metrics.current_knowledge_percentage}%
          </div>
          <Image src="/Graph.svg" alt="Stats Graph" width={300} height={200} className="mt-auto" />
        </div>

        <div className="bg-white p-4 rounded-2xl h-52 w-full sm:w-[48%] lg:w-[30%] gap-4 flex flex-col mb-4">
          <div className="text-sm text-gray-600 font-bold w-full">
            Knowledge Gain
          </div>
          <div className="text-2xl font-bold w-full">+{knowledgeGain}%</div>
          <Image src="/Graph.svg" alt="Stats Graph" width={300} height={200} className="mt-auto" />
        </div>
      </div>
    </div>
  );
}
