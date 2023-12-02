import React from 'react';
import MealCard2 from './MealCard2';

const OrderCard2 = ({ item }) => {


    return (
        <div className='grid lg:grid-cols-3  grid-cols-2  gap-3 mx-auto text-white my-10 '>
        {
            item.map((item, index) => <MealCard2 key={index} item={item}></MealCard2>)
        }

    </div>
    );
};

export default OrderCard2;