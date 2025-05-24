import { motion } from 'framer-motion';
import Card from './Card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, role, image }: TestimonialCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full p-6 flex flex-col" hover>
        <div className="flex-1">
          <svg
            className="h-8 w-8 text-primary-300 mb-4"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-600 italic mb-4">{quote}</p>
        </div>
        <div className="flex items-center mt-4">
          {image ? (
            <img
              className="h-10 w-10 rounded-full object-cover mr-4"
              src={image}
              alt={name}
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-medium text-gray-800">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;