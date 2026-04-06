import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="max-w-md w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-red-500/10 p-4 rounded-full">
            <span className="text-red-400 text-3xl">⚠️</span>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-extrabold mb-2">404</h1>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
          >
            Go Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;