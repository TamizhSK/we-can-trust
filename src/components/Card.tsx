import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card = ({
  children,
  className = '',
  elevation = 'md',
  hover = false,
}: CardProps) => {
  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden ${elevationClasses[elevation]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;