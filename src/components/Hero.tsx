import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative bg-primary-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7709280/pexels-photo-7709280.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
          >
            Empowering Lives, Building Futures
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-primary-50 max-w-2xl mx-auto"
          >
            We Can Trust You is dedicated to providing training, resources, and advocacy for people with disabilities and the underprivileged.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
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
          </motion.div>
        </div>
      </div>
      
      {/* Wave Divider */}
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
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;