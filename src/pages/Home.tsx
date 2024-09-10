import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { lazy, Suspense } from 'react';

// Dynamically importing components
const Banner = lazy(() => import('@/components/home/Banner'));
const FeaturedRooms = lazy(
  () => import('@/components/home/FeaturedRooms')
);
const HowItWorks = lazy(() => import('@/components/home/HowItWorks'));
const ServiceAdvertisement = lazy(
  () => import('@/components/home/ServiceAdvertisement')
);
const Testimonials = lazy(() => import('@/components/home/Testimonials'));
const WhyChooseUs = lazy(() => import('@/components/home/WhyChooseUs'));

const Home = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Banner />
      <ServiceAdvertisement />
      <FeaturedRooms />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
    </Suspense>
  );
};

export default Home;
