import { useState, useEffect } from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 24, label: 'DAYS' },
    { value: 23, label: 'HOURS' },
    { value: 42, label: 'MINUTES' },
    { value: 1, label: 'SECONDS' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = [...prev];
        
        // Countdown logic - simple decrement for demo
        if (newTime[3].value > 0) {
          newTime[3].value -= 1;
        } else if (newTime[2].value > 0) {
          newTime[3].value = 59;
          newTime[2].value -= 1;
        } else if (newTime[1].value > 0) {
          newTime[2].value = 59;
          newTime[3].value = 59;
          newTime[1].value -= 1;
        } else if (newTime[0].value > 0) {
          newTime[1].value = 23;
          newTime[2].value = 59;
          newTime[3].value = 59;
          newTime[0].value -= 1;
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-container">
      {timeLeft.map((unit, index) => (
        <div key={unit.label} className="timer-unit">
          <div className="timer-number">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="timer-label">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;