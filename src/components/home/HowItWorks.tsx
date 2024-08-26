import { FaWallet } from 'react-icons/fa6';
import SectionHeading from '../ui/SectionHeading';

const HowItWorks = () => {
  return (
    <section className="md:py-20 md:px-10">
      <div className="flex justify-center">
        <SectionHeading heading="How it works" />
      </div>
      <div>
        <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3">
          <li className="flex items-center justify-center gap-2 p-4">
            <span className="text-2xl">
              <FaWallet />
            </span>

            <p className="leading-none">
              <strong className="block font-medium">Select A Room</strong>
              <small className="mt-1">Room you want to book.</small>
            </p>
          </li>

          <li className="relative flex items-center justify-center gap-2 bg-gray-50 p-4">
            <span className="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"></span>

            <span className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"></span>

            <span className="text-2xl">
              <FaWallet />
            </span>

            <p className="leading-none">
              <strong className="block font-medium">
                Choose Date and Time
              </strong>
              <small className="mt-1">When you want to get Room.</small>
            </p>
          </li>

          <li className="flex items-center justify-center gap-2 p-4">
            <span className="text-2xl">
              <FaWallet />
            </span>

            <p className="leading-none">
              <strong className="block font-medium">
                Confirm Booking
              </strong>
              <small className="mt-1"> Show us the money. </small>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
