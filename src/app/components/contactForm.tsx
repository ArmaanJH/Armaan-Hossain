import { motion } from 'framer-motion';

export default function ContactForm({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg rounded-lg max-w-lg w-full"
    >
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Send
        </button>
        <button
          type="button"
          onClick={onClose}
          className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </form>
    </motion.div>
  );
}
