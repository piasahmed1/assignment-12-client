import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';


import '@smastrom/react-rating/style.css'
const Review = () => {

    const [review, setreview] = useState([])

    useState(() => {
        fetch('https://assigment-12-server-zeta.vercel.app/review')
            .then(res => res.json())
            .then(data => setreview(data))
    }, [])


    return (

        <div>
              <p className='text-5xl font-bold text-center'>Some Clients Review</p>
            <div className="  bg-[#171717] p-10 my-20 ">
              
                <div className='container mx-auto'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-white">

                        {
                            review.map((review, index) => <SwiperSlide key={index}>
                                <div className='flex justify-center items-center p-5'>
                                    <img className='w-24 h-24 rounded-full' src={review.image} alt="" />
                                </div>
                                <div className=' flex flex-col items-center space-y-4'>
                                    <Rating className=''
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />

                                    <p className='w-1/2 mx-auto text-center'>{review.details}</p>
                                    <h2 className='text-2xl text-bold'>{review.name}</h2>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Review;