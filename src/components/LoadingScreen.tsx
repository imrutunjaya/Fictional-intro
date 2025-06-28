import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Microscope, Brain, Atom, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const phases = [
      { delay: 0, phase: 0 },     // Initial geometric shapes
      { delay: 1200, phase: 1 },  // DNA helix formation
      { delay: 2400, phase: 2 },  // Neural network connections
      { delay: 3600, phase: 3 },  // Data particles flow
      { delay: 4800, phase: 4 },  // Molecular structures
      { delay: 6000, phase: 5 },  // Text formation
      { delay: 7200, phase: 6 },  // Version reveal
      { delay: 8400, phase: 7 },  // Final state
    ];

    phases.forEach(({ delay, phase }) => {
      setTimeout(() => {
        setAnimationPhase(phase);
      }, delay);
    });

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>

      {/* Main animation container */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Central animation area */}
        <div className="relative w-96 h-96 mb-12">
          
          {/* Phase 0: Initial geometric shapes */}
          <div className={`absolute inset-0 transition-all duration-1000 ${animationPhase >= 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="geometric-container">
              <div className="hexagon hex-1"></div>
              <div className="hexagon hex-2"></div>
              <div className="hexagon hex-3"></div>
              <div className="circle circ-1"></div>
              <div className="circle circ-2"></div>
            </div>
          </div>

          {/* Phase 1: DNA Helix */}
          <div className={`absolute inset-0 transition-all duration-1000 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="dna-helix">
              <div className="helix-strand strand-1"></div>
              <div className="helix-strand strand-2"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`dna-base base-${i + 1}`}></div>
              ))}
            </div>
          </div>

          {/* Phase 2: Neural Network */}
          <div className={`absolute inset-0 transition-all duration-1000 ${animationPhase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="neural-network">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`neuron neuron-${i + 1}`}>
                  <div className="neuron-core"></div>
                </div>
              ))}
              {[...Array(15)].map((_, i) => (
                <div key={i} className={`synapse synapse-${i + 1}`}></div>
              ))}
            </div>
          </div>

          {/* Phase 3: Data Flow */}
          <div className={`absolute inset-0 transition-all duration-1000 ${animationPhase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="data-flow">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`data-particle particle-${i + 1}`}></div>
              ))}
              <div className="data-stream stream-1"></div>
              <div className="data-stream stream-2"></div>
              <div className="data-stream stream-3"></div>
            </div>
          </div>

          {/* Phase 4: Molecular Structure */}
          <div className={`absolute inset-0 transition-all duration-1000 ${animationPhase >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="molecule">
              <div className="atom atom-center"></div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`atom atom-orbit orbit-${i + 1}`}></div>
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`bond bond-${i + 1}`}></div>
              ))}
            </div>
          </div>

          {/* Central icon that morphs */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`icon-morph transition-all duration-800 ${animationPhase >= 5 ? 'scale-110' : 'scale-100'}`}>
              {animationPhase < 2 && <Search className="w-16 h-16 text-black animate-pulse" />}
              {animationPhase >= 2 && animationPhase < 4 && <Brain className="w-16 h-16 text-black animate-pulse" />}
              {animationPhase >= 4 && <Atom className="w-16 h-16 text-black animate-spin-slow" />}
            </div>
          </div>
        </div>

        {/* Text Animation */}
        <div className="text-center space-y-6">
          <div className={`transition-all duration-1000 ${animationPhase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl font-light tracking-wider text-black">
              <span className="font-thin">research</span>
              <span className="font-bold">.dev</span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${animationPhase >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-xl text-gray-600 font-light tracking-wide">
              version 3.2
            </p>
          </div>

          {/* Animated tagline */}
          <div className={`transition-all duration-1000 delay-600 ${animationPhase >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-sm text-gray-500 font-light tracking-widest uppercase">
              Advanced Research Platform
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-80">
          <div className="h-px bg-gray-200 relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400 font-light">
            <span>Initializing</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Floating elements */}
        <div className={`absolute inset-0 pointer-events-none ${animationPhase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black rounded-full floating-dot"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;