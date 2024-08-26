import { serviceAdvertisementData } from '@/data/serviceAdvertisementData';
import SectionHeading from '../ui/SectionHeading';

const ServiceAdvertisement = () => {
  return (
    <section className="py-10 border-b md:py-20">
      <div className="flex justify-center">
        <SectionHeading heading="Services Benefits" />
      </div>
      <div className="grid grid-cols-1 gap-10 px-1 md:px-10 md:grid-cols-4">
        {serviceAdvertisementData?.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceAdvertisement;

const ServiceCard = ({ item }: { item: any }) => {
  return (
    <div
      style={{ background: `${item.background}` }}
      className={`p-10 rounded-md relative flex flex-col gap-1`}
    >
      {item.icon}
      {item.heading}
      {item.desc}
      {item.iconGray}
    </div>
  );
};
