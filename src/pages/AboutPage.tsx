import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Heart, Eye, BookOpen, HandHeart } from 'lucide-react';
import Card from '../components/Card';
import { useEffect } from 'react';

const AboutPage = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-16">
      {/* Creative Header */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-40 relative overflow-hidden">
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

        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Heart className="text-accent-400" size={24} />
                  <span className="text-white font-medium">Our Story & Mission</span>
                  <Heart className="text-accent-400" size={24} />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                About <span className="text-accent-400">Us</span>
              </h1>
              
              <p className="px-2 sm:px-0 text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Learn about our mission, our founder's inspiring journey, and our commitment 
                to empowering people with disabilities and underprivileged communities
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                  <span className="font-bold text-accent-400">Since</span> 2007
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                  <span className="font-bold text-accent-400">1,200+</span> Lives Transformed
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                  <span className="font-bold text-accent-400">636</span> Jobs Secured
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-lg p-8"
              >
                <div className="text-primary-500 mb-4 justify-items-center sm:justify-items-start ">
                  <Heart size={36} />
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 text-center sm:text-start ">Our Mission</h2>
                <p className="text-gray-700 text-justify">
                  We Can Trust You is dedicated to empowering people with disabilities and underprivileged communities
                  through education, vocational training, and support services. We work to create an inclusive
                  society where every individual has equal opportunities to thrive.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary-50 rounded-lg p-8"
              >
                <div className="text-secondary-500 mb-4 justify-items-center sm:justify-items-start">
                  <Eye size={36} />
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 text-center sm:text-start ">Our Vision</h2>
                <p className="text-gray-700 text-justify ">
                  We envision a world where people with disabilities are fully integrated into society, 
                  where their rights are protected, and where they have access to education, employment, 
                  and all opportunities available to others. We strive for a more inclusive and equitable society.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder's Story */}
      <section className="py-0 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-display font-black text-gray-900 mb-4">Our Founder's Journey</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
              
                <h3 className="text-2xl px-6 sm:px-0 font-display font-semibold text-gray-900 mb-4">
                  Mr. S. Chezhiyan
                </h3>
                
                <div className="space-y-6 text-justify px-6 sm:px-0 text-gray-600">
                  <p>
                    Mr. S. Chezhiyan lost his eyesight due to Glaucoma when he was studying in 12th grade,
                    forcing him to discontinue his education for four years.
                  </p>
                  
                  <p>
                    Despite this significant challenge, he persevered and pursued his education with determination,
                    earning a diploma in Electric and Electronics Engineering, followed by a graduate degree in History,
                    post graduation in History, Master of Philosophy in History, and a Bachelor of Education degree.
                  </p>
                  
                  <p>
                    In spite of his impressive educational qualifications, he faced discrimination in employment due
                    to his disability. This experience motivated him to establish a charity dedicated to fighting for
                    the rights of people with disabilities and creating opportunities for the underprivileged.
                  </p>
                  
                  <p>
                    He later pursued a PG Diploma in Social Entrepreneurship from the Center for Social Initiative and Management
                    to strengthen his ability to create positive social change.
                  </p>
                  
                  <blockquote className="border-l-4 border-primary-500 pl-4 italic text-justify">
                    "It is better to light a candle than curse the darkness. As long as I live, I will fight for the rights
                    of people with disabilities and the underprivileged."
                    <footer className="text-sm mt-2 text-gray-500">- S. Chezhiyan</footer>
                  </blockquote>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="relative px-5 sm:px-0">
                  <img 
                    src="https://res.cloudinary.com/dclgg7rhe/image/upload/v1750172731/2_sqzyqv" 
                    alt="Founder" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary-600 rounded-lg p-6 shadow-lg hidden md:block">
                    <HandHeart size={36} className="text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
            
          {/* Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl font-display font-bold text-center text-gray-900 mb-12">Educational Journey</h3>
            
            <div className="relative max-w-6xl mx-auto px-4 py-10">
              {/* Vertical Line - Hidden on mobile, visible on larger screens */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
              
              {/* Mobile Vertical Line - Left aligned for mobile */}
              <div className="md:hidden absolute left-10 top-0 h-full w-0.5 bg-primary-200"></div>
              
              <div className="space-y-8 md:space-y-12">
                {/* Timeline Item 1 */}
                <div className="relative flex items-center md:justify-center">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-sm font-semibold text-primary-600 mb-1">1998</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Diploma in Electric and Electronics Engineering</h4>
                      <p className="text-gray-600">Overcame initial challenges after vision loss to pursue technical education</p>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Left Side */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-sm font-semibold text-primary-600 mb-1">1998</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Diploma in Electric and Electronics Engineering</h4>
                        <p className="text-gray-600">Overcame initial challenges after vision loss to pursue technical education</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10 flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="relative flex items-center md:justify-center">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-sm font-semibold text-primary-600 mb-1">2000</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Bachelor's Degree in History</h4>
                      <p className="text-gray-600">Continued academic pursuit despite accessibility challenges</p>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Right Side */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10 flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-sm font-semibold text-primary-600 mb-1">2000</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Bachelor's Degree in History</h4>
                        <p className="text-gray-600">Continued academic pursuit despite accessibility challenges</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Item 3 */}
                <div className="relative flex items-center md:justify-center">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-sm font-semibold text-primary-600 mb-1">2002</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Master's Degree in History</h4>
                      <p className="text-gray-600">Advanced studies with determination and perseverance</p>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Left Side */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-sm font-semibold text-primary-600 mb-1">2002</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Master's Degree in History</h4>
                        <p className="text-gray-600">Advanced studies with determination and perseverance</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10 flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
                
                {/* Timeline Item 4 */}
                <div className="relative flex items-center md:justify-center">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-sm font-semibold text-primary-600 mb-1">2004</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">M.Phil in History</h4>
                      <p className="text-gray-600">Specialized research and academic excellence</p>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Right Side */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10 flex-shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-sm font-semibold text-primary-600 mb-1">2004</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">M.Phil in History</h4>
                        <p className="text-gray-600">Specialized research and academic excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Item 5 */}
                <div className="relative flex items-center md:justify-center">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10">
                      <Award size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-sm font-semibold text-primary-600 mb-1">2006</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Bachelor of Education</h4>
                      <p className="text-gray-600">Prepared to educate and inspire others</p>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Left Side */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-sm font-semibold text-primary-600 mb-1">2006</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Bachelor of Education</h4>
                        <p className="text-gray-600">Prepared to educate and inspire others</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10 flex-shrink-0">
                      <Award size={24} />
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
                
                {/* Timeline Item 6 */}
                <div className="relative flex items-center md:justify-center">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-sm font-semibold text-primary-600 mb-1">2010</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Established We Can Trust You</h4>
                      <p className="text-gray-600">Founded the NGO after experiencing employment discrimination</p>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Right Side */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10 flex-shrink-0">
                      <Briefcase size={24} />
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-sm font-semibold text-primary-600 mb-1">2010</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Established We Can Trust You</h4>
                        <p className="text-gray-600">Founded the NGO after experiencing employment discrimination</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Item 7 */}
                <div className="relative flex items-center md:justify-center">
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10">
                      <BookOpen size={24} />
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-sm font-semibold text-primary-600 mb-1">2012</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">PG Diploma in Social Entrepreneurship</h4>
                      <p className="text-gray-600">Further education to enhance social impact capabilities</p>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Left Side */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="text-sm font-semibold text-primary-600 mb-1">2012</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">PG Diploma in Social Entrepreneurship</h4>
                        <p className="text-gray-600">Further education to enhance social impact capabilities</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 relative z-10 flex-shrink-0">
                      <BookOpen size={24} />
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and shape our impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard 
                title="Dignity" 
                description="We believe in treating every individual with respect and recognizing their inherent worth and dignity."
              />
              
              <ValueCard 
                title="Empowerment" 
                description="We are committed to providing skills and resources that enable individuals to take control of their lives."
              />
              
              <ValueCard 
                title="Inclusion" 
                description="We strive for a society where everyone belongs and has equal access to opportunities regardless of abilities."
              />
              
              <ValueCard 
                title="Justice" 
                description="We advocate for fair treatment and equal rights for people with disabilities and the underprivileged."
              />
              
              <ValueCard 
                title="Innovation" 
                description="We constantly seek creative solutions to address the challenges faced by the communities."
              />
              
              <ValueCard 
                title="Transparency" 
                description="We are committed to openness, accountability, and responsible stewardship of resources."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 text-center" hover>
        <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
          <Heart size={24} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </motion.div>
  );
};



export default AboutPage;