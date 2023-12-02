import React, { useContext } from 'react';
import UseMeals from '../../../Hook/UseMeals';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import { AuthContext } from '../../../Authintication/AuthProvider';
import { Link } from 'react-router-dom';



const AllMeals = () => {
    const [meals, refetch] = UseMeals();
    const axiosSecure = UseAxiosSecure();
    const { user } = useContext(AuthContext);

    const handleDelete = (id) => {


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
                axiosSecure.delete(`/allmeals/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    }

    return (
        <div className='py-10 bg-[#171717]'>
            <div className="overflow-x-auto">
                <table className="text-white table w-full">
                    <thead>
                        <tr>
                            <th className='text-white text-xl'>#</th>
                            <th className='text-white text-xl'>Image</th>
                            <th className='text-white text-xl'>Title</th>
                            <th className='text-white text-xl'>Rating</th>
                            <th className='text-white text-xl'>Distributor Name</th>
                            <th className='text-white text-xl'>Distributor Email</th>
                            <th className='text-white text-xl'>Status</th>
                            <th className='text-white text-xl'>Action</th>
                            <th className='text-white text-xl'>Update</th>
                            <th className='text-white text-xl'>View Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meals.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold'>{item.title}</td>
                                <td className='text-center'>
                                    <Rating
                                        style={{ maxWidth: 140 }}
                                        value={item.rating}
                                        readOnly
                                    />
                                </td>
                                <td className='font-bold'>{user.displayName}</td>
                                <td className='font-bold'>{user.email}</td>
                                <td><button className='btn btn-ghost'>Pending</button></td>
                                <td>


                             


                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-sm bg-red-700 text-white">
                                        Delete <FaTrash />
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/updatemeal/${item._id}`}>
                                    <button className="btn btn-ghost btn-sm bg-blue-700 text-white">Update</button>
                                    </Link>
                                
                                </td>
                                <td>
                                   <Link to={'/meals'}>
                                   <button className='btn btn-outline bg-[#1f2937] text-white border-none'>View Meal</button>
                                   </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllMeals;
