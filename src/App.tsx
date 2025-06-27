import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading duration - 9 seconds for the full animation sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-light text-black">
          <span className="font-thin">research</span>
          <span className="font-bold">.dev</span>
        </h1>
        <p className="text-xl text-gray-600 font-light">
          Advanced Research Platform Ready
        </p>
        <div className="w-24 h-px bg-black mx-auto"></div>
        <p className="text-sm text-gray-500 font-light tracking-widest uppercase">
          Version 3.2 • Initialized
        </p>
      </div>
    </div>
  );
}

export default App;