"use client";
import Image from "next/image";

interface CardProps {
  title: string;
  imageUrl: string;
  correctPercentage: number;
}

export default function TopicCard({
  title,
  imageUrl,
  correctPercentage,
}: CardProps) {
  return (
    <div className="flex items-center overflow-hidden w-full gap-4">
      <div className="w-24 h-12 relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="text-lg font-semibold text-gray-900">{title}</div>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="w-full flex items-center justify-between bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${correctPercentage}%` }}
            ></div>
          </div>
          <div className="text-gray-600 w-36">
            <span className="font-semibold">{correctPercentage}%</span> Correct
          </div>
        </div>
      </div>
    </div>
  );
}
