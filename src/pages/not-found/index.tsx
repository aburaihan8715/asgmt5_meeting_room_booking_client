import { Link } from 'react-router';
import { motion } from 'motion/react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md p-8 text-center bg-white shadow-xl rounded-2xl dark:bg-gray-800"
      >
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <Link
            to="/"
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Go to Home
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600"
          >
            Go to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
