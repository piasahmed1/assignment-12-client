import React, { useContext, useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../Authintication/AuthProvider';

import UseMeals from '../../../Hook/UseMeals';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../Hook/UseAxiosPublic';

const RequestedMeals = () => {


    //i used UseMelas Hooks,but did not works refetch because show that refetch does not a function.thats why i used tanstack query in this conponents....
   // const [meals,refetch] = UseMeals();


 
    const axiospublic = UseAxiosPublic();
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure();


    const { data: meals = [], refetch } = useQuery({
        queryKey: ['meal'],
        queryFn: async () => {

            const res = await axiospublic.get(`/carts?email=${user.email}`);

            return res.data;
        }
    })


    // const totalPrice = meals.reduce((total, item) => total + (item.price || 0), 0)

    // const [meals, setmeals] = useState([]);

    // useEffect(() => {
    //     fetch('https://assigment-12-server-zeta.vercel.app/carts')
    //         .then(res => res.json())
    //         .then(data => {
    //             setmeals(data)

    //         })
    // }, [])



    const handledelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }






    return (
        <div className='py-20 bg-[#171717]'>
            <div className="overflow-x-auto">
                <table className=" text-white table w-full">
                    {/* head */}

                    <thead>
                        <tr>
                            <th className='text-white text-xl'>
                                #
                            </th>
                            <th className='text-white text-xl'>Image</th>
                            <th className='text-white text-xl'>Title</th>
                            <th className='text-white text-xl'>Rating</th>
                            <th className='text-white text-xl'>Status</th>

                            <th className='text-white text-xl'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            meals.map((item, index) => <tr key={index}>


                                <th>

                                    {index + 1}

                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold'>
                                    {item.title}
                                    <br />

                                </td>
                                <td className='text-center'>
                                    <Rating className=''
                                        style={{ maxWidth: 140 }}
                                        value={item.rating}
                                        readOnly
                                    />
                                </td>
                                <td><button className='btn btn-ghost'>Pending</button></td>
                                <th>
                                    <button onClick={() => handledelete(item._id)} className="btn btn-ghost btn-sm bg-red-700 text-white">Delete <FaTrash></FaTrash> </button>
                                </th>

                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

          
        </div>
    );
};

export default RequestedMeals;