import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
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

export default ErrorPage;
