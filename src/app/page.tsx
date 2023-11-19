import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? '/jobs' : '/new-user';
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

      <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 relative z-2 text-center text-white">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-yellow-300">Revolutionize your job search</span>{' '}
          with our{' '}
          <span className="text-green-300 transform transition-transform hover:scale-105 duration-300">
            Job Tracker AI
          </span>
          !
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
          Elevate your job hunting experience with cutting-edge technology and
          personalized insights.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bento Box 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-black text-xl font-semibold mb-3 text-center">
              Track Applications
            </h3>
            <p className="text-gray-700 text-center">
              Effortlessly organize and track all your job applications in one
              centralized location.
            </p>
          </div>

          {/* Bento Box 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 transform transition-transform hover:scale-105 duration-300">
            <h3 className=" text-black text-xl font-semibold mb-3">
              AI Insights
            </h3>
            <p className="text-gray-700">
              Gain valuable insights into your job search with the help of
              advanced AI algorithms.
            </p>
          </div>

          {/* Bento Box 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-black text-xl font-semibold mb-3">
              Gamified Experience
            </h3>
            <p className="text-gray-700">
              Make job hunting enjoyable and rewarding through gamification
              features.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link href={href}>
            <button className="rounded-full bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition duration-300 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
