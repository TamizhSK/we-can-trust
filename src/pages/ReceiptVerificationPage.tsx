import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, XCircle, FileText, Download } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

interface ReceiptDetails {
  receiptNumber: string;
  donorName: string;
  amount: number;
  currency: string;
  purpose: string;
  donationDate: string;
  financialYear: string;
  organizationName: string;
  section80G: string;
}

const ReceiptVerificationPage = () => {
  const [receiptNumber, setReceiptNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    success: boolean;
    valid?: boolean;
    receipt?: ReceiptDetails;
    message?: string;
  } | null>(null);

  const apiUri = import.meta.env.VITE_API_URI;

  const handleVerify = async () => {
    if (!receiptNumber.trim()) {
      alert('Please enter a receipt number');
      return;
    }

    setIsLoading(true);
    setVerificationResult(null);

    try {
      const response = await fetch(`${apiUri}/api/receipts/verify/${receiptNumber.trim()}`);
      const data = await response.json();

      if (response.ok) {
        setVerificationResult({
          success: true,
          valid: data.valid,
          receipt: data.receipt
        });
      } else {
        setVerificationResult({
          success: false,
          message: data.message || 'Receipt not found'
        });
      }
    } catch (error) {
      console.error('Error verifying receipt:', error);
      setVerificationResult({
        success: false,
        message: 'Failed to verify receipt. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadReceipt = async (receiptNumber: string) => {
    try {
      const response = await fetch(`${apiUri}/api/receipts/download/${receiptNumber}`);
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Receipt-${receiptNumber}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('Failed to download receipt. Please try again later.');
      }
    } catch (error) {
      console.error('Error downloading receipt:', error);
      alert('Failed to download receipt. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <FileText className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Receipt Verification
            </h1>
            <p className="text-lg text-gray-600">
              Verify the authenticity of your donation receipt
            </p>
          </motion.div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Enter Receipt Number</h2>
            
            <div className="flex space-x-4 mb-6">
              <input
                type="text"
                placeholder="Enter receipt number (e.g., WCT-202406-123456)"
                value={receiptNumber}
                onChange={(e) => setReceiptNumber(e.target.value)}
                className="flex-1 p-4 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
              />
              <Button
                onClick={handleVerify}
                disabled={isLoading}
                className="px-6 flex items-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>{isLoading ? 'Verifying...' : 'Verify'}</span>
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Receipt numbers are typically in the format WCT-YYYYMM-XXXXXX. 
              You can find this on your donation receipt or in the confirmation email.
            </p>
          </Card>

          {/* Verification Results */}
          {verificationResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8">
                {verificationResult.success && verificationResult.valid ? (
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                      <div>
                        <h3 className="text-2xl font-semibold text-green-700">
                          Receipt Verified ✓
                        </h3>
                        <p className="text-green-600">
                          This is a genuine donation receipt
                        </p>
                      </div>
                    </div>

                    {verificationResult.receipt && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-green-800 mb-4">Receipt Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="text-sm text-green-600 font-medium">Receipt Number:</span>
                            <p className="text-green-800">{verificationResult.receipt.receiptNumber}</p>
                          </div>
                          <div>
                            <span className="text-sm text-green-600 font-medium">Donor Name:</span>
                            <p className="text-green-800">{verificationResult.receipt.donorName}</p>
                          </div>
                          <div>
                            <span className="text-sm text-green-600 font-medium">Amount:</span>
                            <p className="text-green-800 text-lg font-bold">
                              ₹{verificationResult.receipt.amount.toLocaleString('en-IN')}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-green-600 font-medium">Purpose:</span>
                            <p className="text-green-800">{verificationResult.receipt.purpose}</p>
                          </div>
                          <div>
                            <span className="text-sm text-green-600 font-medium">Donation Date:</span>
                            <p className="text-green-800">
                              {new Date(verificationResult.receipt.donationDate).toLocaleDateString('en-IN')}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-green-600 font-medium">Financial Year:</span>
                            <p className="text-green-800">{verificationResult.receipt.financialYear}</p>
                          </div>
                          <div className="md:col-span-2">
                            <span className="text-sm text-green-600 font-medium">Organization:</span>
                            <p className="text-green-800">{verificationResult.receipt.organizationName}</p>
                          </div>
                          <div className="md:col-span-2">
                            <span className="text-sm text-green-600 font-medium">80G Certificate:</span>
                            <p className="text-green-800">{verificationResult.receipt.section80G}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-4">
                      <Button
                        onClick={() => downloadReceipt(verificationResult.receipt!.receiptNumber)}
                        className="flex items-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Receipt</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setReceiptNumber('');
                          setVerificationResult(null);
                        }}
                      >
                        Verify Another Receipt
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <XCircle className="w-8 h-8 text-red-500" />
                      <div>
                        <h3 className="text-2xl font-semibold text-red-700">
                          Verification Failed
                        </h3>
                        <p className="text-red-600">
                          {verificationResult.message || 'Receipt could not be verified'}
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-red-800 mb-2">Possible Reasons:</h4>
                      <ul className="text-red-700 space-y-1">
                        <li>• Receipt number is incorrect or invalid</li>
                        <li>• Receipt may be fraudulent</li>
                        <li>• Donation is still being processed</li>
                        <li>• System error (please try again)</li>
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setReceiptNumber('');
                          setVerificationResult(null);
                        }}
                      >
                        Try Again
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Contact Support
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          )}

          {/* Information Section */}
          <Card className="p-8 mt-8">
            <h3 className="text-xl font-semibold mb-4">About Receipt Verification</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                This verification system ensures the authenticity of donation receipts issued by We Can Trust. 
                All genuine receipts can be verified using this system.
              </p>
              <p>
                <strong>Features of our verification system:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Cryptographic verification ensures receipt authenticity</li>
                <li>Instant verification of donation details</li>
                <li>Download original receipt PDF</li>
                <li>Valid for tax exemption under Section 80G</li>
              </ul>
              <p className="text-sm">
                If you have any questions about receipt verification, please contact our support team.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReceiptVerificationPage;
