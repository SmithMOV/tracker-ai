export default function Home() {
  return (
    <div className="bg-white flex justify-center items-center w-screen h-screen">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-font text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-indigo-700">Elevate your productivity</span>{' '}
            with our{' '}
            <span className="text-green-600">AI-driven Job Tracker</span>!
            <br />
            Experience work like never before.
          </h2>
          <p className="body-font mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-700">
            Unleash the power of{' '}
            <span className="text-purple-600">artificial intelligence</span>,
            track insightful <span className="text-blue-600">data metrics</span>
            , and enjoy the thrill of{' '}
            <span className="text-red-600">gamification</span>. Make work a
            rewarding adventure!
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 ease-in-out"
            >
              Get started now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
