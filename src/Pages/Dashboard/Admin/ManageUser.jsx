import React from 'react';
import { FaTrash, FaUser } from 'react-icons/fa';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const ManageUser = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
          
            
            return res.data;
        },
    });


    const handledelete =user => {

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

                axiosSecure.delete(`/users/${user._id}`)
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

    const handlemakeadmin=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0)
            refetch()
            {
                toast.success(`${user.email} created successfully`)
            }
        })
    }



    return (
        <div className='my-20'>
            <h1 className='text-center bg-[#1F2937] border-none lg:text-4xl font-semibold text-white btn btn-outline'>
                Total User: {users.length}
            </h1>

            <div className='py-10'>
                <div className='overflow-x-auto'>
                    <table className='table text-white'>
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-white font-bold text-xl'>Name:</th>
                                <th className='text-white font-bold text-xl'>Email</th>
                                <th className='text-white font-bold text-xl'>Role</th>
                                <th className='text-white font-bold text-xl'>Subscription Status</th>
                                <th className='text-white font-bold text-xl'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id} className=''>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? (
                                            'Admin'
                                        ) : (
                                            <button className='p-2 rounded-full text-2xl bg-blue-700' onClick={()=>handlemakeadmin(user)}>
                                            <FaUser ></FaUser>
                                        </button>
                                        )}
                                    </td>
                                    <td>
                                        <button className='bg-red-700 p-3 rounded-xl'>
                                            <FaTrash />
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handledelete(user)} className="bg-red-700 p-3 rounded-xl"> <FaTrash></FaTrash></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;
