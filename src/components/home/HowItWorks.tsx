import { steps } from '@/data/howItWorksData';
import SectionHeading from '../ui/SectionHeading';

interface StepProps {
  count: string;
  heading: string;
  description: string;
  icon: React.ReactNode;
}

const Step = ({ count, heading, description, icon }: StepProps) => {
  return (
    <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
      <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font">
        {count}
      </div>
      <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-blue-500 bg-blue-100 rounded-full">
          {icon}
        </div>
        <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
          <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
            {heading}
          </h2>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-10 border-b md:py-20">
      <div className="flex justify-center">
        <SectionHeading heading="How It Works" />
      </div>
      <div className="text-gray-600">
        <div className="flex flex-wrap px-5 mx-auto">
          {steps?.map((step) => (
            <Step
              key={step.count}
              count={step.count}
              heading={step.heading}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
