import { ReactNode } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { serviceCards } from '@/data/serveceAdvertisementData';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  color,
  bgColor,
}: ServiceCardProps) => {
  return (
    <div
      className={`flex flex-col items-center p-4 rounded-md shadow-md ${bgColor}`}
    >
      <div className={`text-${color}-500 mb-3`}>{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-center text-gray-600">{description}</p>
    </div>
  );
};

const ServiceAdvertisement = () => {
  return (
    <section className="py-10 border-b md:py-20 md:px-10">
      <div className="flex justify-center">
        <SectionHeading heading="Service Benefits" />
      </div>
      <div className="p-6 border rounded-md">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards?.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              color={card.color}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvertisement;
