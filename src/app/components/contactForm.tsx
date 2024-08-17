import { motion } from 'framer-motion';
import { useState } from 'react';

type ContactFormProps = {
  onClose: () => void;
  className: string;
};

export default function ContactForm({ onClose }: ContactFormProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 px-4 pt-4 shadow-lg rounded-lg max-w-lg h-1/2 w-full z-50"
    >
      <form className='h-full flex flex-col'>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block bg-gray-300 font-bold text-black w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4 flex-grow">
          <label className="block text-sm font-medium text-white">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-2 block bg-gray-300 font-medium text-black w-full border border-gray-300 rounded-md h-full"
            required
          ></textarea>
        </div>
        <div className='flex-shrink-0 flex flex-row p-8'>
          <button type="submit" className="bg-gray-500 font-bold w-1/2 text-white px-2 py-2 rounded-md">
            Send
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
    </motion.div>
  );
}
