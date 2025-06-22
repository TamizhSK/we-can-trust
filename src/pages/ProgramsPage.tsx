import { motion } from 'framer-motion';
import { 
  Users, 
  GraduationCap, 
  Bike, 
  BookOpen, 
  Monitor,
  Lightbulb,
  Scale,
  TreePine,
  Heart
} from 'lucide-react';

import Card from '../components/Card';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';

const ProgramsPage = () => {
  // Tailoring program carousel data
  const tailoringCarouselItems = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dclgg7rhe/image/upload/v1750172729/7_edua0c.jpg",
      title: "Empowering 1,200 Rural Women",
      description: "From 2007 to 2014, our comprehensive tailoring training program transformed the lives of 1,200 rural women, providing them with essential skills for economic independence and sustainable livelihoods."
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dclgg7rhe/image/upload/v1750172729/image_xajv27",
      title: "Professional Skill Development",
      description: "Our program covers everything from basic stitching techniques to advanced garment construction, ensuring participants gain comprehensive tailoring expertise for professional success."
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dclgg7rhe/image/upload/v1750172729/8_uukmhy",
      title: "Creating Sustainable Businesses",
      description: "Many graduates have established their own tailoring businesses, becoming entrepreneurs who not only support their families but also provide employment opportunities to others in their communities."
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dclgg7rhe/image/upload/v1750172730/5_hzo519.jpg",
      title: "Building Stronger Communities",
      description: "Beyond individual success stories, our tailoring program has created networks of skilled artisans who collaborate, share knowledge, and strengthen their entire communities through collective growth."
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dclgg7rhe/image/upload/v1750414287/i3_mm54nf.jpg",
      title: "Threads of Confidence",
      description: "Each stitch sewn is a step toward self-confidence—participants leave the program not only with new skills, but with a renewed sense of pride and purpose."
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dclgg7rhe/image/upload/v1750172729/3_ohcbr2.jpg",
      title: "Fashioning a Brighter Future",
      description: "Graduates showcase their creations at local exhibitions, inspiring others and proving that with opportunity and support, creativity can transform futures."
    }
  ];

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
                  <span className="text-white font-medium">Transforming Lives Since 2007</span>
                  <Heart className="text-accent-400" size={24} />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Our <span className="text-accent-400">Impact</span> Programs
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Empowering communities through innovative initiatives that create lasting change, 
                build sustainable futures, and champion the rights of every individual
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
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
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Featured Tailoring Program with Carousel */}
            <div className="mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center bg-primary-100 text-primary-700 px-6 py-3 rounded-full mb-6">
                    <Users size={24} className="mr-3" />
                    <span className="font-semibold text-lg">Featured Program</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                    Tailoring Training Program
                  </h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    From 2007 to 2014, our flagship tailoring and garment-making training program became a beacon of hope 
                    for rural women, transforming 1,200 lives by providing not just skills, but pathways to economic independence 
                    and community leadership.
                  </p>
                </div>
                
                <Carousel items={tailoringCarouselItems} />
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-12">
                  <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="font-bold text-primary-600 text-4xl mb-2">1,200</div>
                    <div className="text-gray-600 font-medium">Women Trained</div>
                  </div>
                  <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="font-bold text-primary-600 text-4xl mb-2">7</div>
                    <div className="text-gray-600 font-medium">Years Duration</div>
                  </div>
                  <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="font-bold text-primary-600 text-4xl mb-2">85%</div>
                    <div className="text-gray-600 font-medium">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="font-bold text-primary-600 text-4xl mb-2">100+</div>
                    <div className="text-gray-600 font-medium">Businesses Started</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Other Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              {/* Environmental Initiatives */}
              <ProgramCard
                icon={<TreePine size={32} />}
                title="Environmental Initiatives"
                description="In 2012, we planted 500 trees in colleges and schools across Chennai, creating green spaces and promoting environmental awareness among students and communities."
                stats={[
                  { label: "Trees Planted", value: "500" },
                  { label: "Institutions", value: "25+" },
                  { label: "Year", value: "2012" }
                ]}
                color=" border-green-200"
                iconColor="text-green-600"
              />

              {/* Bicycle Assembly Training */}
              <ProgramCard
                icon={<Bike size={32} />}
                title="Bicycle Assembly Training"
                description="In collaboration with TI Cycles, we provided specialized bicycle repair and assembly training to 25 differently-abled persons, opening new employment opportunities."
                stats={[
                  { label: "Trainees", value: "25" },
                  { label: "Partner", value: "TI Cycles" },
                  { label: "Skills", value: "Assembly & Repair" }
                ]}
                color=" border-blue-200"
                iconColor="text-blue-600"
              />

              {/* Legal Advocacy */}
              <ProgramCard
                icon={<Scale size={32} />}
                title="Legal Advocacy"
                description="In 2013, we filed a Public Interest Litigation in Chennai High Court, resulting in a landmark judgment that secured Group 4 government jobs for 636 differently-abled persons."
                stats={[
                  { label: "Jobs Secured", value: "636" },
                  { label: "Court", value: "Chennai HC" },
                  { label: "Year", value: "2013" }
                ]}
                color="border-purple-200"
                iconColor="text-purple-600"
              />

              {/* Digital Literacy */}
              <ProgramCard
                icon={<Monitor size={32} />}
                title="Digital Literacy & Entrepreneurship"
                description="In 2014, we conducted computer training programs along with MSME entrepreneurship development for 250 students, bridging the digital divide."
                stats={[
                  { label: "Students", value: "250" },
                  { label: "Skills", value: "IT + Business" },
                  { label: "Year", value: "2014" }
                ]}
                color=" border-indigo-200"
                iconColor="text-indigo-600"
              />

              {/* Career Guidance */}
              <ProgramCard
                icon={<GraduationCap size={32} />}
                title="Career Guidance Program"
                description="From 2014 to 2024, we provided comprehensive career counseling and guidance to 600 PWD and underprivileged students, helping them navigate their professional journeys."
                stats={[
                  { label: "Students Guided", value: "600" },
                  { label: "Duration", value: "10 Years" },
                  { label: "Period", value: "2014-2024" }
                ]}
                color=" border-yellow-200"
                iconColor="text-yellow-600"
              />

              {/* Disability Rights Awareness */}
              <ProgramCard
                icon={<Lightbulb size={32} />}
                title="Disability Rights Awareness"
                description="From 2022 to 2025, we have been conducting disability rights awareness programs to educate communities and promote inclusive practices."
                stats={[
                  { label: "Programs", value: "50+" },
                  { label: "Duration", value: "3+ Years" },
                  { label: "Period", value: "2022-2025" }
                ]}
                color=" border-pink-200"
                iconColor="text-pink-600"
              />

            </div>

            {/* Additional Services */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Support Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Diary Units</h4>
                  <p className="text-gray-600 text-sm">Provided specialized diary units for 25 visually impaired persons to enhance their daily organization and independence.</p>
                </div>
                <div className="text-center p-4">
                  <Users className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Bicycle Assembly Training</h4>
                  <p className="text-gray-600 text-sm">Trained 15 women and 35 men in bicycle assembly and maintenance in collaboration with TI Cycles.</p>
                </div>
                <div className="text-center p-4">
                  <Monitor className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Digital Literacy</h4>
                  <p className="text-gray-600 text-sm">Provided computer training for 200 people with entrepreneurship development program support from MSME Department.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ongoing Projects */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Ongoing Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our current initiatives continuing to make impact in communities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <OngoingProject 
                title="Diary Units Provision"
                description="Continuing to provide specialized diary units for visually impaired individuals to enhance their daily organization"
                icon={<BookOpen size={24} />}
                status="Active"
              />
              
              <OngoingProject 
                title="Career Guidance for PWD Youth"
                description="Ongoing career guidance and counseling services specifically focused on youth with disabilities"
                icon={<GraduationCap size={24} />}
                status="Active"
              />
              
              <OngoingProject 
                title="Legal Advocacy Follow-up"
                description="Following up on PIL cases in Supreme Court and High Court to ensure implementation of PWD job reservations"
                icon={<Scale size={24} />}
                status="In Progress"
              />
            </div>
            
            <div className="mt-12 text-center">
                <div className="flex justify-center">
                <Link to="/donate">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 flex items-center justify-center gap-2"
                >
                  <Heart size={18} />
                  <span>Support Our Programs</span>
                </Button>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  color: string;
  iconColor: string;
}

const ProgramCard = ({ icon, title, description, stats, color, iconColor }: ProgramCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className={`p-6 h-full ${color} border-2`} hover>
        <div className={`${iconColor} mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="grid grid-cols-3 gap-3 mt-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bold text-gray-800 text-lg">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

interface OngoingProjectProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: string;
}

const OngoingProject = ({ title, description, icon, status }: OngoingProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full bg-white border border-primary-200" hover>
        <div className="text-primary-600 mb-4">
          {icon}
        </div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
            {status}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
};

export default ProgramsPage;