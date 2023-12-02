import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const MealCard2 = ({ item }) => {
    const { title, image, rating, price, _id } = item;

    return (
        <div>
             <div className="card lg:w-96  bg-[#171717] shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <figure><img className='lg:h-[400px] w-full' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className=" text-center">{title}</h2>
          <p className='text-center'>{price} $</p>
          <div className='flex justify-center'>
            <Rating className='text-center' style={{ maxWidth: 180 }} value={rating} readOnly />
          </div>
          <p></p>
          <div className="card-actions justify-center">

           

          </div>
        </div>
      </div>
        </div>
    );
};

export default MealCard2;