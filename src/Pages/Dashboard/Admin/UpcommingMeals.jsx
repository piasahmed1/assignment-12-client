import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseMeals from '../../../Hook/UseMeals';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic';

const UpcommingMeals = () => {

    const axiospublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();


    const { data: meals = [], refetch } = useQuery({
        queryKey: ['meal'],
        queryFn: async () => {

            const res = await axiospublic.get('/upcomming');

            return res.data;
        }
    })








    return (
        <div className='h-screen bg-[#171717] py-10'>
             
            <div className=' py-20  '>
            <h1 className='text-center text-5xl font-bold text-blue-700 my-10'>Upcomming Meals</h1>
                <div className="overflow-x-auto">
                    <table className="text-white table w-full">
                        <thead>
                            <tr className='text-2xl'>
                                <th className='text-white text-2xl '>#</th>

                                <th className='text-white text-2xl '>Title</th>
                                <th className='text-white text-2xl'>Meal category</th>
                                <th className='text-white text-2xl'>Price</th>


                            </tr>
                        </thead>
                        <tbody>
                            {meals.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                
                                    <td className='font-bold text-xl text-white'>{item.name}</td>
                                    <td className='font-bold text-xl text-white'>{item.category}</td>
                                    <td className='font-bold text-xl text-white'>{item.price} $</td>



                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UpcommingMeals;