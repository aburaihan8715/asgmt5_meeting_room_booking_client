import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { reviews } from '@/data/customerReviewData';
import SectionHeading from '../ui/SectionHeading';

import testimonialsBg from '@/assets/images/testimonials_bg.jpg';

const Testimonials = () => {
  const style = {
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${testimonialsBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <section className="py-20 pb-10 md:pb-20">
      <SectionHeading heading="Customer Reviews" />
      <div className="md:px-10" style={style}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {reviews?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center h-[70vh] items-center">
                <div className="flex flex-col items-center justify-center gap-2 bg-[#212529]/20 p-10 rounded-md">
                  <div className="avatar">
                    <div className="rounded-full w-14 h-14 ring ring-primary ring-offset-2 ring-offset-base-100">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={item.img}
                        alt="user photo"
                      />
                    </div>
                  </div>

                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                  />

                  <p className="text-[#f8f9fa] opacity-80 md:text-xl text-[14px]">
                    {item.review}
                  </p>
                  <p className="md:text-xl text-[14px] font-semibold text-[#f8f9fa]">
                    -{item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

/*
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Testimonials = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Testimonials;
*/
