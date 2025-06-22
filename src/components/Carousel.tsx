import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel = ({ items, autoPlay = true, autoPlayInterval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <div className="relative w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
      {/* Main carousel container */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg shadow-lg">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className="relative h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay - lighter on mobile for better image visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent sm:from-black/70 sm:via-black/20"></div>
              
              {/* Text content - responsive visibility */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                  {item.title}
                </h3>
                {/* Description hidden on mobile (< sm), visible on sm and above */}
                <p className="hidden sm:block text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - reduced opacity on mobile */}
      <Button
        variant="outline"
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/60 sm:bg-white/80 sm:hover:bg-white border-white/30 sm:border-white/50 text-gray-800 p-1.5 sm:p-2 transition-all duration-200"
        onClick={goToPrevious}
      >
        <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
      </Button>

      <Button
        variant="outline"
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/60 sm:bg-white/80 sm:hover:bg-white border-white/30 sm:border-white/50 text-gray-800 p-1.5 sm:p-2 transition-all duration-200"
        onClick={goToNext}
      >
        <ChevronRight size={16} className="sm:w-5 sm:h-5" />
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-3 sm:mt-4 md:mt-6 space-x-1.5 sm:space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-primary-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;