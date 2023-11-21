import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import BentoBox from './components/bento-box';

const bentoBoxVariants = [
  {
    title: 'Track Applications',
    description:
      'Effortlessly organize and track all your job applications in one centralized location.',
  },
  {
    title: 'AI Insights',
    description:
      'Gain valuable insights into your job search with the help of advanced AI algorithms.',
  },
  {
    title: 'Gamified Experience',
    description:
      'Make job hunting enjoyable and rewarding through gamification features.',
  },
];

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex items-center justify-center overflow-hidden">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/path/to/your/animated-bg.gif")' }}
      ></motion.div> */}

      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

      <div className="relative z-2 mx-auto max-w-2xl text-center text-white">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-yellow-300">Revolutionize your job search</span>{' '}
          with our <span className="text-green-300">Job Tracker AI</span>!
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
          Elevate your job hunting experience with cutting-edge technology and
          personalized insights.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bentoBoxVariants.map((bentoBoxVariant, index) => (
            <BentoBox
              key={index}
              title={bentoBoxVariant.title}
              description={bentoBoxVariant.description}
            />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/sign-up">
            <button className="rounded-full bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition duration-300 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
