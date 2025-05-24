import { motion } from 'framer-motion';
import { 
  Users, 
  Leaf, 
  GraduationCap, 
  Bike, 
  BookOpen, 
  Monitor,
  BarChart4,
  Lightbulb
} from 'lucide-react';

import Card from '../components/Card';
import Button from '../components/Button';

const ProgramsPage = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Our Programs
              </h1>
              <p className="text-xl text-primary-100">
                Empowering communities through innovative initiatives
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Transforming Lives Through Skill Development
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our programs are designed to provide practical skills, support, and opportunities 
                for people with disabilities and underprivileged communities
              </p>
            </div>
            
            <div className="space-y-24">
              {/* Tailoring Program */}
              <ProgramSection
                title="Tailoring Training Program"
                description="Comprehensive training in tailoring and garment making to empower women with skills for economic independence"
                icon={<Users size={28} />}
                image="https://images.pexels.com/photos/4262010/pexels-photo-4262010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                stats={[
                  { label: "Women Trained", value: "1,200+" },
                  { label: "Success Rate", value: "85%" },
                  { label: "Duration", value: "6 Months" },
                ]}
                reverse={false}
              />
              
              {/* Environmental Initiatives */}
              <ProgramSection
                title="Environmental Initiatives"
                description="Tree planting programs and environmental awareness initiatives to create a sustainable future for our communities"
                icon={<Leaf size={28} />}
                image="https://images.pexels.com/photos/6207383/pexels-photo-6207383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                stats={[
                  { label: "Trees Planted", value: "300+" },
                  { label: "Communities Reached", value: "15" },
                  { label: "Environmental Workshops", value: "24" },
                ]}
                reverse={true}
              />
              
              {/* Career Guidance */}
              <ProgramSection
                title="Career Guidance Program"
                description="Specialized career counseling for people with disabilities and underprivileged students to help them identify suitable career paths"
                icon={<GraduationCap size={28} />}
                image="https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                stats={[
                  { label: "Students Guided", value: "600+" },
                  { label: "Placement Rate", value: "70%" },
                  { label: "Schools Reached", value: "25" },
                ]}
                reverse={false}
              />
              
              {/* Bicycle Assembly Training */}
              <ProgramSection
                title="Bicycle Assembly Training"
                description="Technical training in bicycle assembly and maintenance in partnership with TI Cycles, providing practical vocational skills"
                icon={<Bike size={28} />}
                image="https://images.pexels.com/photos/5210526/pexels-photo-5210526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                stats={[
                  { label: "People Trained", value: "50" },
                  { label: "Women Participants", value: "15" },
                  { label: "Men Participants", value: "35" },
                ]}
                reverse={true}
              />
              
              {/* Diary Units */}
              <ProgramSection
                title="Diary Units for Visually Impaired"
                description="Providing accessible diary units to support visually impaired individuals in managing their daily activities and improving organization"
                icon={<BookOpen size={28} />}
                image="https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                stats={[
                  { label: "Units Provided", value: "25" },
                  { label: "Target for 2025", value: "100" },
                  { label: "Satisfaction Rate", value: "95%" },
                ]}
                reverse={false}
              />
              
              {/* Digital Literacy */}
              <ProgramSection
                title="Digital Literacy Program"
                description="Computer training programs to bridge the digital divide and enhance employability in today's technology-driven world"
                icon={<Monitor size={28} />}
                image="https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                stats={[
                  { label: "People Trained", value: "200+" },
                  { label: "Course Duration", value: "3 Months" },
                  { label: "Completion Rate", value: "80%" },
                ]}
                reverse={true}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Ongoing Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Ongoing Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our current initiatives making impact in communities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <OngoingProject 
                title="Diary Units Expansion"
                description="Expanding our successful diary units program to reach more visually impaired individuals"
                icon={<BookOpen size={24} />}
                progress={75}
                goal="100 Units"
              />
              
              <OngoingProject 
                title="Career Guidance Program"
                description="Providing specialized career guidance sessions for youth with disabilities"
                icon={<GraduationCap size={24} />}
                progress={60}
                goal="200 Students"
              />
              
              <OngoingProject 
                title="Legal Advocacy"
                description="Ongoing legal efforts in Supreme Court and High Court for PWD rights"
                icon={<BarChart4 size={24} />}
                progress={40}
                goal="Multiple Cases"
              />
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                variant="primary" 
                size="lg"
              >
                <Lightbulb size={18} className="mr-2" />
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProgramSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  stats: Array<{ label: string; value: string }>;
  reverse: boolean;
}

const ProgramSection = ({ 
  title, 
  description, 
  icon, 
  image, 
  stats, 
  reverse 
}: ProgramSectionProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={reverse ? 'order-1 md:order-2' : ''}
      >
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg inline-flex items-center">
              <div className="text-primary-500 mr-2">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={reverse ? 'order-2 md:order-1' : ''}
      >
        <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          {description}
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="font-bold text-primary-600 text-xl mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <Button variant="primary">
          Learn More
        </Button>
      </motion.div>
    </div>
  );
};

interface OngoingProjectProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  goal: string;
}

const OngoingProject = ({ title, description, icon, progress, goal }: OngoingProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full" hover>
        <div className="text-primary-500 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <div className="mt-auto">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-primary-500 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{progress}% Complete</span>
            <span>Goal: {goal}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProgramsPage;