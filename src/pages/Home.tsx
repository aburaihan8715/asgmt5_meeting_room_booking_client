import Banner from '@/components/home/Banner';
import FeaturedRooms from '@/components/home/FeaturedRooms';
import HowItWorks from '@/components/home/HowItWorks';
import ServiceAdvertisement from '@/components/home/ServiceAdvertisement';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Banner />
      <ServiceAdvertisement />
      <FeaturedRooms />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default Home;
