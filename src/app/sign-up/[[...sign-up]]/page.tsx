import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex flex-col gap-5 items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      <h2 className="text-green-300 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight sm:tracking-normal md:tracking-wide relative">
        Job Tracker AI
      </h2>
      <SignUp />
    </div>
  );
}
