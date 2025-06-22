import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Heart, Users, GraduationCap, Lightbulb } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

const DonatePage = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [donationType, setDonationType] = useState<string>('general');
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [razorpayKey, setRazorpayKey] = useState<string>('');

  const apiUri = import.meta.env.VITE_API_URI || "http://localhost:8000";

  // Load Razorpay script and get configuration
  useEffect(() => {
    const loadRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const fetchRazorpayConfig = async () => {
      try {
        const response = await fetch(`${apiUri}/api/donations/razorpay-config`);
        const data = await response.json();
        if (data.success) {
          setRazorpayKey(data.razorpayKeyId);
        }
      } catch (error) {
        console.error('Error fetching Razorpay config:', error);
      }
    };

    loadRazorpay();
    fetchRazorpayConfig();
  }, [apiUri]);  const handleAmountClick = (value: number) => {
    setAmount(value);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value === '' ? '' : parseInt(value));
    }
  };

  const getPurposeText = (type: string) => {
    const purposes = {
      general: 'General Support',
      education: 'Education & Training',
      advocacy: 'Legal Advocacy',
      community: 'Community Projects'
    };
    return purposes[type as keyof typeof purposes] || 'General Support';
  };

  const handleDonate = async () => {
    if (!amount || !donorName || !donorEmail) {
      alert('Please fill in all required fields');
      return;
    }

    if (!razorpayKey) {
      alert('Payment system not ready. Please try again.');
      return;
    }

    setIsLoading(true);

    try {
      // Create order
      const orderResponse = await fetch(`${apiUri}/api/donations/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          amount: Number(amount),
          donorName,
          donorEmail,
          purpose: getPurposeText(donationType)
        })
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // Initialize Razorpay
      const options = {
        key: razorpayKey,
        amount: orderData.amount * 100,
        currency: orderData.currency,
        name: 'We Can Trust',
        description: getPurposeText(donationType),
        order_id: orderData.orderId,
        handler: async (response: RazorpayResponse) => {
          try {
            // Verify payment
            const verifyResponse = await fetch(`${apiUri}/api/donations/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donationId: orderData.donationId
              })
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              alert('Thank you for your donation! Payment successful.');
              // Reset form
              setAmount('');
              setDonorName('');
              setDonorEmail('');
              setDonationType('general');
              setIsRecurring(false);
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Error verifying payment:', error);
            alert('Payment verification failed. Please contact support.');
          } finally {
            setIsLoading(false);
          }
        },
        prefill: {
          name: donorName,
          email: donorEmail
        },
        theme: {
          color: '#0066cc'
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Error creating donation order:', error);
      alert('Failed to process donation. Please try again.');
      setIsLoading(false);
    }
  };


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
                  <span className="text-white font-medium">Make a Difference</span>
                  <Heart className="text-accent-400" size={24} />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Make a <span className="text-accent-400">Donation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                Your contribution helps us empower people with disabilities, provide training programs, 
                and create lasting change in communities across India
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                  <span className="font-bold text-accent-400">₹500</span> Trains 1 Person
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                  <span className="font-bold text-accent-400">₹1000</span> Digital Literacy
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                  <span className="font-bold text-accent-400">₹2500</span> Legal Support
                </div>
              </div>
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

                  <div className='mb-8'>
                    <h3 className="text-lg font-medium text-gray-800 mb-3">Donor Information:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-400 outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
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
                          type="button"
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
                        ₹
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
                    disabled={!amount || !donorName || !donorEmail || isLoading}
                    className="mt-4 flex items-center justify-center gap-2"
                    >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard size={18} />
                        <span>
                          Donate ₹{amount || 0}
                        </span>
                      </>
                    )}
                    </Button>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    Secure payment powered by RazorPay
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
