import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

type ContactFormProps = {
  onClose: () => void;
};

export default function ContactForm({ onClose }: ContactFormProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    try {
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';      

      const templateParams = {
        user_email: email,
        message: message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);

      setIsSent(true);
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300/25 px-4 pt-4 shadow-lg rounded-lg max-w-lg h-1/2 w-full z-50"
    >
      {!isSent ? (  // Conditional rendering based on isSent state
        <form className="h-full flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="youremail@something.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block bg-gray-100 font-bold text-black w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4 flex-grow">
            <textarea
              placeholder="Let me know what you're reaching out about!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 p-2 block bg-gray-100 font-medium text-black w-full border border-gray-300 rounded-md h-full"
              required
            ></textarea>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex-shrink-0 flex flex-row p-8">
            <button
              type="submit"
              className="bg-gray-500 font-bold w-1/2 text-white px-2 py-2 rounded-md"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 bg-red-400 font-bold w-1/2 text-white px-2 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        
        // Success message and close button
        <div className="h-full flex flex-col items-center justify-center text-center">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="4x" className="text-white mb-4" />
          <p className="text-xl font-semibold text-white mb-4">
            Your email has been sent! I will be in contact with you soon.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-400 font-bold w-1/2 text-white px-2 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      )}
    </motion.div>
  );
}
