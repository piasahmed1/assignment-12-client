import React from 'react';
import MealCard from '../MealCard/MealCard';

const OrderCard = ({item}) => {


    return (

        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-3 mx-auto text-white my-10 '>
{
                        item.map((item,index)=><MealCard key={index} item={item}></MealCard>)
                    }
            
        </div>
    );
};

export default OrderCard;