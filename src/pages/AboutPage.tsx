import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Heart, Eye, BookOpen } from 'lucide-react';
import Card from '../components/Card';

const AboutPage = () => {
  return (
    <div className="pb-16">
      {/* Creative Header */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-40 relative overflow-hidden">
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
              <pattern id="grid-about" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-about)" />
          </svg>
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
              
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
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
                <div className="text-primary-500 mb-4">
                  <Heart size={36} />
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  We Can Trust You is dedicated to empowering people with disabilities and underprivileged communities
                  through vocational training, education, advocacy, and support services. We work to create an inclusive
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
                <div className="text-secondary-500 mb-4">
                  <Eye size={36} />
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Founder's Journey</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h3 className="text-2xl px-6 sm:px-1 font-display font-semibold text-gray-900 mb-4">
                  Mr. S. Chezhiyan
                </h3>
                
                <div className="space-y-6 text-justify px-6 sm:px-1 text-gray-600">
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
                  
                  <blockquote className="border-l-4 border-primary-500 pl-4 italic">
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
                    <BookOpen size={36} className="text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Timeline */}
            <div className="mt-20">
              <h3 className="text-2xl font-display font-bold text-center text-gray-900 mb-12">Educational Journey</h3>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
                
                <div className="space-y-12">
                  <TimelineItem 
                    icon={<GraduationCap size={24} />}
                    year="1998"
                    title="Diploma in Electric and Electronics Engineering"
                    description="Overcame initial challenges after vision loss to pursue technical education"
                    isLeft
                  />
                  
                  <TimelineItem 
                    icon={<GraduationCap size={24} />}
                    year="2000"
                    title="Bachelor's Degree in History"
                    description="Continued academic pursuit despite accessibility challenges"
                    isLeft={false}
                  />
                  
                  <TimelineItem 
                    icon={<GraduationCap size={24} />}
                    year="2002"
                    title="Master's Degree in History"
                    description="Advanced studies with determination and perseverance"
                    isLeft
                  />
                  
                  <TimelineItem 
                    icon={<GraduationCap size={24} />}
                    year="2004"
                    title="M.Phil in History"
                    description="Specialized research and academic excellence"
                    isLeft={false}
                  />
                  
                  <TimelineItem 
                    icon={<Award size={24} />}
                    year="2006"
                    title="Bachelor of Education"
                    description="Prepared to educate and inspire others"
                    isLeft
                  />
                  
                  <TimelineItem 
                    icon={<Briefcase size={24} />}
                    year="2010"
                    title="Established We Can Trust You"
                    description="Founded the NGO after experiencing employment discrimination"
                    isLeft={false}
                  />
                  
                  <TimelineItem 
                    icon={<BookOpen size={24} />}
                    year="2012"
                    title="PG Diploma in Social Entrepreneurship"
                    description="Further education to enhance social impact capabilities"
                    isLeft
                  />
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
                description="We constantly seek creative solutions to address the challenges faced by the communities we serve."
              />
              
              <ValueCard 
                title="Transparency" 
                description="We are committed to openness, accountability, and responsible stewardship of resources."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dedicated professionals working to create positive change
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember 
                name="S. Chezhiyan" 
                role="Founder & Director"
                image="https://res.cloudinary.com/dclgg7rhe/image/upload/v1750172731/10_nmptp7"
              />
              
              <TeamMember 
                name="Priya Lakshmi" 
                role="Program Coordinator"
                image="https://images.pexels.com/photos/3767405/pexels-photo-3767405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              
              <TeamMember 
                name="Raj Kumar" 
                role="Legal Advocate"
                image="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              
              <TeamMember 
                name="Ananya Singh" 
                role="Vocational Trainer"
                image="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              
              <TeamMember 
                name="Vikram Patel" 
                role="Community Outreach"
                image="https://images.pexels.com/photos/8427047/pexels-photo-8427047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              
              <TeamMember 
                name="Meena Rao" 
                role="Finance Manager"
                image="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TimelineItemProps {
  icon: React.ReactNode;
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}

const TimelineItem = ({ icon, year, title, description, isLeft }: TimelineItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''}`}
    >
      <div className="w-1/2"></div>
      
      <div className="relative flex justify-center">
        <div className="h-12 w-12 rounded-full bg-primary-500 flex items-center justify-center text-white z-10">
          {icon}
        </div>
      </div>
      
      <div className="w-1/2">
        <Card className={`p-6 ${isLeft ? 'mr-10' : 'ml-10'}`}>
          <div className="text-sm font-semibold text-primary-600 mb-1">{year}</div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </Card>
      </div>
    </motion.div>
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

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden" hover>
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-primary-600">{role}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default AboutPage;