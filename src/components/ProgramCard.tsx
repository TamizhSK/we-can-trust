import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Card from './Card';
import Button from './Button';

interface Stat {
  label: string;
  value: string;
}

interface ProgramCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  stats?: Stat[];
  color?: string;
  iconColor?: string;
  buttonText?: string;
  onClick?: () => void;
}

const ProgramCard = ({ 
  icon, 
  title, 
  description, 
  stats,
  color = "border-gray-200",
  iconColor = "text-primary-500",
  buttonText = "Learn More", 
  onClick 
}: ProgramCardProps) => {
  return (
    <Card className={`h-full flex flex-col ${color}`} hover>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        {/* Icon Section */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className={`p-2 sm:p-3 bg-gray-50 rounded-full ${iconColor}`}>
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow text-center leading-relaxed px-2 sm:px-0">
          {description}
        </p>
        
        {/* Stats Section - Improved Mobile Layout */}
        {stats && stats.length > 0 && (
          <div className="mb-4 sm:mb-6">
            {/* Mobile: Stack vertically, Desktop: 3 columns */}
            <div className="flex flex-col space-y-2 sm:grid sm:grid-cols-3 sm:gap-3 sm:space-y-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Button Section */}
        {buttonText && (
          <div className="text-center mt-auto">
            <Button 
              variant="text" 
              onClick={onClick}
              className="inline-flex items-center text-sm sm:text-base"
            >
              {buttonText}
              <ArrowRight size={14} className="ml-1 sm:w-4 sm:h-4" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProgramCard;