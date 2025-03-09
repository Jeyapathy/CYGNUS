import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/components/CartProvider";
import { Check, AlertCircle } from "lucide-react";
// Replace the individual icon imports with:
import { PayPalIcon, GooglePayIcon, ApplePayIcon, CreditCardIcon } from "@/components/icons/PaymentIcons";

export default function Payment() {
  const { total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'gpay' | 'applepay' | 'paypal' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    clearCart();
    // Navigate to success page or show success message
  };

  return (
    <div className="container max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer p-4 rounded-lg border ${
              paymentMethod === 'paypal' ? 'border-purple-600' : 'border-gray-200'
            }`}
            onClick={() => setPaymentMethod('paypal')}
          >
            <PayPalIcon className="h-8 w-auto mx-auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer p-4 rounded-lg border ${
              paymentMethod === 'gpay' ? 'border-purple-600' : 'border-gray-200'
            }`}
            onClick={() => setPaymentMethod('gpay')}
          >
            <GooglePayIcon className="h-8 w-auto mx-auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer p-4 rounded-lg border ${
              paymentMethod === 'applepay' ? 'border-purple-600' : 'border-gray-200'
            }`}
            onClick={() => setPaymentMethod('applepay')}
          >
            <ApplePayIcon className="h-8 w-auto mx-auto" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer p-4 rounded-lg border ${
              paymentMethod === 'card' ? 'border-purple-600' : 'border-gray-200'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            <CreditCardIcon className="h-8 w-auto mx-auto" />
          </motion.div>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handlePayment}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Card Holder Name</label>
            <Input type="text" placeholder="Enter your full name" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Card Number</label>
            <Input type="text" placeholder="0000 0000 0000 0000" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Expiry Date</label>
              <Input type="text" placeholder="MM/YY" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">CVV</label>
              <Input type="text" placeholder="123" required />
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="flex items-center">
                  Processing... <motion.div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                </span>
              ) : (
                `Pay ₹${(total).toFixed(2)}`
              )}
            </Button>
          </div>
        </motion.form>
      )}

      {(paymentMethod === 'gpay' || paymentMethod === 'applepay' || paymentMethod === 'paypal') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8"
        >
          <Button
            onClick={handlePayment}
            className="w-full max-w-md"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                Processing... <motion.div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              </span>
            ) : (
              `Continue with ${
                paymentMethod === 'gpay' ? 'Google Pay' :
                paymentMethod === 'applepay' ? 'Apple Pay' : 'PayPal'
              }`
            )}
          </Button>
        </motion.div>
      )}
    </div>
  );
}