import { FaCheck } from 'react-icons/fa6';
import SectionHeading from '../ui/SectionHeading';

const WhyChooseUs = () => {
  return (
    <section className="md:mb-20 mb-10 pb-10 md:h-[90vh] h-full border-b md:py-20">
      <div className="flex justify-center">
        <SectionHeading heading="Why Choose Us" />
      </div>
      <div className="text-gray-600 body-font">
        <div className="flex flex-col items-center px-1 mx-auto md:px-10 md:flex-row">
          <div className="w-full mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://rb.gy/n2momw"
            />
          </div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
            <h3 className="mb-4 font-medium text-gray-900 title-font sm:text-2xl">
              Because of...
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span>Enhanced Typing Experience</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span>Durability</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span>Customization Options</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span>Rollover and Anti-Ghosting</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-primary" />
                <span> Aesthetics and Build Quality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
