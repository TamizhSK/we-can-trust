import { motion } from 'framer-motion';
import { 
  Users, 
  Leaf, 
  GraduationCap, 
  Bike, 
  BookOpen, 
  Monitor,
  Heart
} from 'lucide-react';

import Hero from '../components/Hero';
import ImpactCounter from '../components/ImpactCounter';
import ProgramCard from '../components/ProgramCard';
import Card from '../components/Card';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through your support, we've been able to make a significant difference in many lives
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ImpactCounter number={1200} title="Women Trained in Tailoring" />
            <ImpactCounter number={300} title="Trees Planted" />
            <ImpactCounter number={600} title="Students Guided" duration={2.8} />
            <ImpactCounter number={200} title="Digital Literacy Trainees" duration={2.6} />
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a variety of programs designed to empower individuals and communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard 
              icon={<Users size={28} />}
              title="Tailoring Training"
              description="Comprehensive training in tailoring and garment making, empowering women with skills for economic independence."
            />
            
            <ProgramCard 
              icon={<Leaf size={28} />}
              title="Environmental Initiatives"
              description="Tree planting programs and environmental awareness to create a sustainable future for communities."
            />
            
            <ProgramCard 
              icon={<GraduationCap size={28} />}
              title="Career Guidance"
              description="Specialized career counseling for people with disabilities and underprivileged students."
            />
            
            <ProgramCard 
              icon={<Bike size={28} />}
              title="Bicycle Assembly Training"
              description="Technical training in bicycle assembly and maintenance in partnership with TI Cycles."
            />
            
            <ProgramCard 
              icon={<BookOpen size={28} />}
              title="Diary Units for Visually Impaired"
              description="Providing accessible diary units to support visually impaired individuals in daily activities."
            />
            
            <ProgramCard 
              icon={<Monitor size={28} />}
              title="Digital Literacy"
              description="Computer training programs to bridge the digital divide and enhance employability."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/programs">
              <Button variant="primary" size="lg">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dclgg7rhe/image/upload/v1750172731/10_nmptp7" 
                    alt="Founder" 
                    className="w-full h-auto object-cover" 
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Our Founder's Story</h2>
                <p className="text-gray-600 mb-6">
                  Mr. S. Chezhiyan lost his eyesight due to Glaucoma while studying 12th grade. Despite this challenge,
                  he persevered and earned multiple degrees including a diploma in Electric and Electronics Engineering,
                  a graduate degree in History, post graduation in History, and Master of Philosophy in History.
                </p>
                <p className="text-gray-600 mb-6">
                  Despite his qualifications, he faced employment discrimination due to his disability. This 
                  experience motivated him to establish this charity to fight for the rights of people with 
                  disabilities and create opportunities for the underprivileged.
                </p>
                <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700 mb-6">
                  "It is better to light a candle than curse the darkness."
                </blockquote>
                <Link to="/about">
                  <Button variant="outline">
                    Read Full Story
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been changed through our programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The tailoring program gave me the skills to start my own business. I now support my family and have even hired two other women from my community."
              name="Lakshmi"
              role="Tailoring Program Graduate"
              image="https://images.pexels.com/photos/7387432/pexels-photo-7387432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            
            <TestimonialCard
              quote="As a visually impaired person, the diary unit has transformed how I organize my day and track my activities. It's given me greater independence."
              name="Rajesh"
              role="Diary Unit Recipient"
              image="https://images.pexels.com/photos/8090127/pexels-photo-8090127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            
            <TestimonialCard
              quote="The career guidance program helped me identify my strengths and secure a job that accommodates my disability. I'm now financially independent."
              name="Priya"
              role="Career Guidance Participant"
              image="https://images.pexels.com/photos/8850731/pexels-photo-8850731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </section>
      
      {/* Donate CTA */}
      <section className="py-16 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Heart size={48} className="mx-auto text-accent-400 mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Make a Difference Today
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Your donation helps us continue our work in supporting people with disabilities and underprivileged communities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link to="/donate">
                <Button 
                  size="lg" 
                  variant="primary" 
                  className="bg-accent-500 hover:bg-accent-600 focus:ring-accent-400 text-lg px-8 py-3"
                >
                  Donate Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Current Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Ongoing Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our current initiatives making impact in communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6" hover>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Diary Units for Visually Impaired</h3>
              <p className="text-gray-600 mb-4">
                We're expanding our successful diary units program to reach more visually impaired individuals,
                providing them tools for better organization and independence.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>75% Complete</span>
                <span>Goal: 100 Units</span>
              </div>
            </Card>
            
            <Card className="p-6" hover>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Career Guidance for Youth</h3>
              <p className="text-gray-600 mb-4">
                Providing specialized career guidance sessions for youth with disabilities, helping them
                identify suitable career paths and opportunities.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>60% Complete</span>
                <span>Goal: 200 Students</span>
              </div>
            </Card>
            
            <Card className="p-6" hover>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Advocacy</h3>
              <p className="text-gray-600 mb-4">
                Ongoing legal efforts in the Supreme Court and High Court to ensure proper implementation
                of job reservations for people with disabilities.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Ongoing</span>
                <span>Multiple Cases</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;