import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../../assets/Banner/banner (1).jpg'
import slider2 from '../../../assets/Banner/banner (2).jpg'
import slider3 from '../../../assets/Banner/banner (3).jpg'
import slider4 from '../../../assets/Banner/banner (4).jpg'
import slider5 from '../../../assets/Banner/banner 5.jpg'

const Category = () => {
  return (
    <section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salad Item</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Eating Time</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>spicy salad</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider4} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>get together</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider5} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>eating show</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>eating show</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;