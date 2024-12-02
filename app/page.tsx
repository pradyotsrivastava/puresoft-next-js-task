"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleNavigate = () => {
    setLoading(true);
    router.push("/dashboard");
    setLoading(false);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gray-900 text-white p-8 gap-16 sm:p-20 font-sans">
      <header className="text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Welcome to the Tesla Dashboard
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          Your gateway to the future of energy and innovation.
        </p>
      </header>

      <main className="flex flex-col gap-8 items-center">
        <Image
          src="/tesla-logo.png"
          alt="Tesla Logo"
          width={300}
          height={120}
          className="opacity-90 rounded-full w-full"
          priority
        />

        <button
          onClick={handleNavigate}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 text-lg"
        >
          Explore the Dashboard
        </button>
      </main>

      <footer className="text-center text-gray-500">
        <p>Powered by Next.js and Tailwind CSS</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tesla Dashboard. All rights
          reserved.
        </p>
        <p className="text-sm mt-4">
          &copy;  Pradyot Srivastava, Full Stack
          Developer
        </p>
      </footer>
    </div>
  );
}
