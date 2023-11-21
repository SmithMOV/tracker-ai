import React from 'react';

type BentoBoxProps = {
  title: string;
  description: string;
};

export default function BentoBox({ title, description }: BentoBoxProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 transform transition-transform hover:scale-105 duration-300">
      <h3 className="text-black text-xl font-semibold mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
}
