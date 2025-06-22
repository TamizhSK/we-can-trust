import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-24 sm:py-16 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      {/* Animated blurred gradient background with amber blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
            style={{
            backgroundImage: 
              'radial-gradient(circle at 20% 30%, rgba(255, 235, 59, 0.7) 0%, transparent 50%), ' +
              'radial-gradient(circle at 80% 50%, rgba(76, 175, 80, 0.6) 0%, transparent 50%), ' +
              'radial-gradient(circle at 50% 80%, rgba(255, 152, 0, 0.5) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
            animation: 'animatedGradient 16s ease-in-out infinite',
            filter: 'blur(60px)',
            opacity: 0.7,
          }}
        />
      </div>

      {/* Optional: Decorative grid pattern on top */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-hero" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="0" cy="0" r="0.5" fill="currentColor" opacity="0.3" />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="50%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#grid-hero)" stroke="url(#gridGradient)" />
        </svg>
      </div>
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
              We Can Trust is dedicated to providing training, resources, and advocacy for people with disabilities and the underprivileged.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4 mb-8">
              <div className="hidden sm:block  bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="font-bold text-accent-400">1,200+</span> Women Empowered
              </div>
              <div className="hidden sm:block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="font-bold text-accent-400">636</span> Jobs Secured
              </div>
              <div className="hidden sm:block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                <span className="font-bold text-accent-400">500</span> Trees Planted
              </div>
            </div>
            
            <div className="flex flex-row sm:flex-row justify-center gap-4">
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
                  Our Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;