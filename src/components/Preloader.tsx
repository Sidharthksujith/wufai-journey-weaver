import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation and complete immediately
      onComplete();
      return;
    }

    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Progress animation
    const duration = 3000; // 3 seconds
    const interval = 30; // Update every 30ms for smooth animation
    const increment = (interval / duration) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          
          // Wait for fade out animation then complete
          setTimeout(() => {
            document.body.style.overflow = 'unset';
            onComplete();
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearInterval(progressTimer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center"
      style={{
        animation: progress >= 100 ? 'fade-out 0.5s ease-out forwards' : undefined
      }}
    >
      {/* Logo */}
      <div 
        className="mb-8"
        style={{
          animation: 'logo-scale-fade 1s ease-out forwards'
        }}
      >
        <img 
          src="/lovable-uploads/938e4f3b-6dfe-4057-8ebb-f9827640925a.png" 
          alt="WUFAI Logo" 
          className="h-20 w-auto object-contain"
        />
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-75 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: '#3E3DFF'
          }}
        />
      </div>

      <style>{`
        @keyframes logo-scale-fade {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-out {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;