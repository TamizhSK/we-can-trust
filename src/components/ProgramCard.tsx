import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Card from './Card';
import Button from './Button';

interface ProgramCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const ProgramCard = ({ 
  icon, 
  title, 
  description, 
  buttonText = "Learn More", 
  onClick 
}: ProgramCardProps) => {
  return (
    <Card className="h-full flex flex-col" hover>
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-primary-500 mb-4 flex justify-center">
          <div className="p-3 bg-primary-50 rounded-full">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow text-center">
          {description}
        </p>
        
        {buttonText && (
          <div className="text-center">
            <Button 
              variant="text" 
              onClick={onClick}
              className="inline-flex items-center"
            >
              {buttonText}
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProgramCard;