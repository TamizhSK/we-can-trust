import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from '../hooks/useInView';

interface ImpactCounterProps {
  number: number;
  title: string;
  duration?: number;
}

const ImpactCounter = ({ number, title, duration = 2.5 }: ImpactCounterProps) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView, hasStarted]);
  
  return (
    <div 
      ref={ref} 
      className="text-center p-4 transition-transform duration-500 transform"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {hasStarted ? (
          <CountUp
            start={0}
            end={number}
            duration={duration}
            separator=","
          />
        ) : (
          0
        )}
      </div>
      <div className="text-sm md:text-base text-gray-600">{title}</div>
    </div>
  );
};

export default ImpactCounter;