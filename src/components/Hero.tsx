import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-accent-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-hero" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-hero)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Heart className="text-accent-400" size={24} />
                <span className="text-white font-medium">Empowering Lives Since 2007</span>
                <Heart className="text-accent-400" size={24} />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Empowering <span className="text-accent-400">Lives</span>, Building <span className="text-accent-400">Futures</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              We Can Trust You is dedicated to providing training, resources, and advocacy for people with disabilities and the underprivileged.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="font-bold text-accent-400">1,200+</span> Women Empowered
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="font-bold text-accent-400">636</span> Jobs Secured
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="font-bold text-accent-400">500</span> Trees Planted
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate">
                <Button 
                  size="lg" 
                  variant="primary" 
                  className="bg-accent-500 hover:bg-accent-600 focus:ring-accent-400"
                >
                  Donate Now
                </Button>
              </Link>
              <Link to="/programs">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 focus:ring-white"
                >
                  Our Programs <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path 
            d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 65C1248 60 1344 60 1392 60L1440 60V0H0V120Z" 
            fill="#f9fafb"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;