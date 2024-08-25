import RightArrow from '@/assets/icons/RightArrow';
import bannerBg from '@/assets/videos/banner_bg.mp4';
import bannerImage from '@/assets/images/banner.jpg';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="relative text-gray-600 body-font md:px-10 px-1">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bannerBg}
        autoPlay
        loop
        muted
      ></video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

      {/* Content Wrapper */}
      <div className="relative flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Book Your Ideal Meeting Room <br /> with Ease.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Efficient, hassle-free room booking for all your meeting needs.
          </p>
          <div className="group">
            <Link to="/meeting-rooms">
              <Button className="flex items-center gap-2 text-base p-6">
                <span className="">Booking Now</span>
                <span className="mt-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  <RightArrow />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={bannerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
