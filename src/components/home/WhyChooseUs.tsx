import { whyChooseUsData } from '@/data/whyChooseUsData';
import SectionHeading from '../ui/SectionHeading';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const WhyChooseUsCard = ({
  icon,
  title,
  description,
  bgColor,
}: FeatureCardProps) => {
  return (
    <div
      className={`flex flex-col items-center p-4 ${bgColor} rounded-lg shadow-md`}
    >
      <div className="mb-3 text-indigo-500">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-center text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-10 border-b md:py-20 md:px-10">
      <div className="flex justify-center">
        <SectionHeading heading="Why Choose Us" />
      </div>
      <div className="p-5 border rounded-md">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsData?.map((card, index) => (
            <WhyChooseUsCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
