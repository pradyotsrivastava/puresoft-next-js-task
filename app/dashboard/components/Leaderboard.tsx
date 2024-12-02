"use client";
import Image from "next/image";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

interface CardProps {
  title: string;
  imageUrl: string;
  accuracyPercentage: number;
  previousAccuracyPercentage: number;
  points: number;
}

export default function Leaderboard({
  title,
  imageUrl,
  points,
  accuracyPercentage,
  previousAccuracyPercentage,
}: CardProps) {
  const accuracyDifference = accuracyPercentage - previousAccuracyPercentage;
  return (
    <div className="flex items-center w-full gap-4">
      <div className="w-10 h-10 relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <div className="font-bold">{title}</div>
          <div className="text-gray-500 text-sm font-semibold">
            {points} Points / User - {accuracyPercentage}% correct
          </div>
        </div>

        <div className="text-2xl font-bold flex items-center gap-2">
          {accuracyDifference}
          {accuracyDifference > 0 ? (
            <TbTriangleFilled className="text-green-500/70" />
          ) : (
            <TbTriangleInvertedFilled className="text-red-500/70" />
          )}
        </div>
      </div>
    </div>
  );
}
