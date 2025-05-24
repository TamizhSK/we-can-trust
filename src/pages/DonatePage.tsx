import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Heart, DollarSign, Users, GraduationCap, Lightbulb } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const DonatePage = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [donationType, setDonationType] = useState<string>('general');
  const [isRecurring, setIsRecurring] = useState<boolean>(false);

  const handleAmountClick = (value: number) => {
    setAmount(value);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value === '' ? '' : parseInt(value));
    }
  };

  const handleDonate = () => {
    // Show Stripe dialog here when integrated
    alert('Redirecting to payment gateway...');
  };

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="bg-primary-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heart size={48} className="mx-auto text-accent-400 mb-6" />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Make a Donation
              </h1>
              <p className="text-xl text-primary-100">
                Your contribution helps us empower people with disabilities and create lasting change
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Donation Form */}
              <div className="md:col-span-2">
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Donation</h2>
                  
                  {/* Donation Type */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Select a cause:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        className={`p-4 rounded-lg border transition-colors ${
                          donationType === 'general' 
                            ? 'bg-primary-50 border-primary-500 text-primary-700' 
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                        onClick={() => setDonationType('general')}
                      >
                        <Heart className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                        <div className="font-medium">General Support</div>
                      </button>
                      
                      <button
                        className={`p-4 rounded-lg border transition-colors ${
                          donationType === 'education' 
                            ? 'bg-primary-50 border-primary-500 text-primary-700' 
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                        onClick={() => setDonationType('education')}
                      >
                        <GraduationCap className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                        <div className="font-medium">Education & Training</div>
                      </button>
                      
                      <button
                        className={`p-4 rounded-lg border transition-colors ${
                          donationType === 'advocacy' 
                            ? 'bg-primary-50 border-primary-500 text-primary-700' 
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                        onClick={() => setDonationType('advocacy')}
                      >
                        <Lightbulb className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                        <div className="font-medium">Legal Advocacy</div>
                      </button>
                      
                      <button
                        className={`p-4 rounded-lg border transition-colors ${
                          donationType === 'community' 
                            ? 'bg-primary-50 border-primary-500 text-primary-700' 
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                        onClick={() => setDonationType('community')}
                      >
                        <Users className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                        <div className="font-medium">Community Projects</div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Select an amount:</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[500, 1000, 2500, 5000].map((value) => (
                        <button
                          key={value}
                          className={`py-3 rounded-lg border font-medium transition-colors ${
                            amount === value 
                              ? 'bg-primary-50 border-primary-500 text-primary-700' 
                              : 'border-gray-300 hover:border-primary-300'
                          }`}
                          onClick={() => handleAmountClick(value)}
                        >
                          ₹{value}
                        </button>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <DollarSign size={18} />
                      </span>
                      <input
                        type="text"
                        value={amount === '' ? '' : amount}
                        onChange={handleCustomAmountChange}
                        placeholder="Custom Amount"
                        className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  {/* Donation Frequency */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Donation frequency:</h3>
                    <div className="flex gap-4">
                      <button
                        className={`flex-1 py-3 rounded-lg border font-medium transition-colors ${
                          !isRecurring 
                            ? 'bg-primary-50 border-primary-500 text-primary-700' 
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                        onClick={() => setIsRecurring(false)}
                      >
                        One-time
                      </button>
                      <button
                        className={`flex-1 py-3 rounded-lg border font-medium transition-colors ${
                          isRecurring 
                            ? 'bg-primary-50 border-primary-500 text-primary-700' 
                            : 'border-gray-300 hover:border-primary-300'
                        }`}
                        onClick={() => setIsRecurring(true)}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    variant="primary" 
                    fullWidth 
                    size="lg"
                    onClick={handleDonate}
                    disabled={!amount}
                    className="mt-4"
                  >
                    <CreditCard size={18} className="mr-2" />
                    {isRecurring 
                      ? `Donate ₹${amount} Monthly` 
                      : `Donate ₹${amount}`
                    }
                  </Button>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    Secure payment powered by Stripe
                  </div>
                </Card>
              </div>
              
              {/* Side Information */}
              <div>
                <Card className="p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">How Your Donation Helps</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-600">₹500 can provide study materials for a student</span>
                    </li>
                    <li className="flex">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-600">₹1,000 can fund digital literacy training for one person</span>
                    </li>
                    <li className="flex">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-600">₹2,500 can support legal advocacy costs</span>
                    </li>
                    <li className="flex">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-600">₹5,000 can help fund a diary unit for a visually impaired person</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Tax Benefits</h3>
                  <p className="text-gray-600 mb-4">
                    Your donation is eligible for tax deduction under Section 80G of the Income Tax Act.
                    We will provide a receipt for your donation.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;