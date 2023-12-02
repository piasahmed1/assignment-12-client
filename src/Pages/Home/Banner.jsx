import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/04.jpg'
import img2 from '../../assets/03.png'

import img6 from '../../assets/image-asset.jpeg'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
const Banner = () => {


    return (
        <div className="bg-[#171717] text-white">







            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-white rounded-2xl">


                <SwiperSlide className="rounded-2xl" >
                    <div className='flex justify-between gap-5 items-center container mx-auto h-screen '>

                        <div className='space-y-4 mx-10 w-1/2'>
                            <div>
                                <h1 className='lg:text-6xl text-3xl font-bold'>Discover Delicious <br /> Meal</h1> <br />

                                <p>Explore a world of flavors with our exquisite restaurant dishes. Indulge in a culinary experience that will tantalize your taste buds and leave you craving for more.</p>
                            </div>


                            <div className='lg:flex  gap-4'>
                                <input type="text" placeholder="Find Your meals" className="input text-black input-bordered lg:w-full max-w-xs" />
                                <AwesomeButton type="primary  " className='btn btn-outline lg:text-black lg:bg-[#00ffc4]   text-white border-none'>Search</AwesomeButton >
                            </div>
                        </div>

                        <div className='w-1/2 rounded-2xl'>

                            <img className="rounded-2xl w-[590px] h-[260px]" src={img6} alt="" />



                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className='flex justify-between gap-5 items-center container mx-auto h-screen '>

                        <div className='space-y-4 mx-10 w-1/2'>
                            <div>
                                <h1 className='lg:text-6xl text-3xl font-bold'>Discover Delicious <br /> Meal</h1> <br />

                                <p>Explore a world of flavors with our exquisite restaurant dishes. Indulge in a culinary experience that will tantalize your taste buds and leave you craving for more.</p>
                            </div>


                            <div className='lg:flex  gap-4'>
                                <input type="text" placeholder="Find Your meals" className="input text-black input-bordered lg:w-full max-w-xs" />
                                <AwesomeButton type="primary  " className='btn btn-outline lg:text-black lg:bg-[#00ffc4]   text-white border-none'>Search</AwesomeButton >
                            </div>
                        </div>

                        <div className='w-1/2 rounded-2xl'>

                            <img className="w-[590px] h-[260px] rounded-2xl" src={img1} alt="" />



                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide >
                    <div className='flex justify-between gap-5 items-center container mx-auto h-screen '>

                        <div className='space-y-4 mx-10 w-1/2'>
                            <div>
                                <h1 className='lg:text-6xl text-3xl font-bold'>Discover Delicious <br /> Meal</h1> <br />

                                <p>Explore a world of flavors with our exquisite restaurant dishes. Indulge in a culinary experience that will tantalize your taste buds and leave you craving for more.</p>
                            </div>


                            <div className='lg:flex  gap-4'>
                                <input type="text" placeholder="Find Your meals" className="input text-black input-bordered lg:w-full max-w-xs" />
                                <AwesomeButton type="primary  " className='btn btn-outline lg:text-black lg:bg-[#00ffc4]   text-white border-none'>Search</AwesomeButton >
                            </div>
                        </div>

                        <div className='w-1/2 rounded-2xl'>

                            <img className="w-[590px] h-[260px] rounded-2xl" src={img2} alt="" />



                        </div>

                    </div>
                </SwiperSlide>


            </Swiper>

        </div>
    );
};

export default Banner;