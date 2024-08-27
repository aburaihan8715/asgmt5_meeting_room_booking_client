import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="text-gray-800 bg-gray-50">
      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center">
              <SectionHeading heading="Contact Information" />
            </div>
            <p className="max-w-sm mx-auto text-lg">
              Reach out to us using the contact details below or fill out
              the form to get in touch.
            </p>
          </motion.div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-lg font-semibold">
              Email:{' '}
              <a
                href="mailto:info@example.com"
                className="text-blue-500 hover:underline"
              >
                info@example.com
              </a>
            </p>
            <p className="mb-4 text-lg font-semibold">
              Phone:{' '}
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p className="mb-4 text-lg font-semibold">
              Office Address: 123 Example St, City, State, ZIP
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="flex justify-center">
              <SectionHeading heading="Contact Us" />
            </div>
            <p className="max-w-sm mx-auto text-lg">
              Please fill out the form below and we will get back to you as
              soon as possible.
            </p>
          </motion.div>
          <div className="max-w-lg mx-auto">
            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </motion.label>
                <motion.input
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  type="text"
                  id="name"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </motion.label>
                <motion.input
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  type="email"
                  id="email"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </motion.label>
                <motion.input
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  type="text"
                  id="subject"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <motion.label
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </motion.label>
                <motion.textarea
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  id="message"
                  rows={4}
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Message"
                ></motion.textarea>
              </div>
              <div className="text-center">
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Not implemented yet!');
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  type="submit"
                  className="w-full px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
