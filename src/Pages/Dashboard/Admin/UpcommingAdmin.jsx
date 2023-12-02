import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const UpcommingAdmin = () => {
    const axiospublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();


    const { data: meals = [], refetch } = useQuery({
        queryKey: ['meal'],
        queryFn: async () => {

            const res = await axiospublic.get('/upcomming');

            return res.data;
        }


        
    })


    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            

        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/upcomming/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div>
              <div className='h-screen bg-[#171717] py-10'>
              <h1 className='text-center text-5xl font-bold text-blue-700 my-5'>Upcomming Meals</h1>
            <div className=' py-20  '>
              
                <div className="overflow-x-auto">
                    <table className="text-white table w-full">
                        <thead>
                            <tr className='text-2xl'>
                                <th className='text-white text-2xl '>#</th>

                                <th className='text-white text-2xl '>Title</th>
                                <th className='text-white text-2xl'>Meal category</th>
                                <th className='text-white text-2xl'>Price</th>
                                <th className='text-white text-2xl'>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {meals.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                
                                    <td className='font-bold text-xl text-white'>{item.name}</td>
                                    <td className='font-bold text-xl text-white'>{item.category}</td>
                                    <td className='font-bold text-xl text-white'>{item.price} $</td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost bg-red-700 btn-lg">
                                            <FaTrashAlt className="text-white"></FaTrashAlt>
                                        </button>
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpcommingAdmin;