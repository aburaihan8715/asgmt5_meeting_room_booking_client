import Banner from '@/components/home/Banner';
import FeaturedRoom from '@/components/home/FeaturedRoom';
import HowItWorks from '@/components/home/HowItWorks';
import ServiceAdvertisement from '@/components/home/ServiceAdvertisement';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Banner />
      <ServiceAdvertisement />
      <FeaturedRoom />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default Home;
