import React, { useContext } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from "react-hook-form"
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Authintication/AuthProvider';
import { data } from 'autoprefixer';



const AddMeals = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure=UseAxiosSecure();
    const {user}=useContext(AuthContext)

    const onSubmit =async (data) => {


        const upcommingmenuItem={
            name:data.name,
            category:data.category,
            price:data.price,
            Rating:data.Rating,
            Date:data.Date,
            Review:data.Review,
            Likes:data.Likes,
            distributorName: user?.displayName || data.distributorName, 
            distributorEmail: user?.email || data.distributorEmail, 
            Ingredients:data.Ingredients,
            Description:data.Description,
            image:data.image,
           
        }


        const upcomming=await axiosSecure.post('/upcomming',upcommingmenuItem);
        console.log(upcommingmenuItem.data);
        if(upcomming.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }




        const menuItem={
            name:data.name,
            category:data.category,
            price:data.price,
            Rating:data.Rating,
            Date:data.Date,
            Review:data.Review,
            Likes:data.Likes,
            distributorName: user?.displayName || data.distributorName, 
            distributorEmail: user?.email || data.distributorEmail, 
            Ingredients:data.Ingredients,
            Description:data.Description,
            image:data.image,
           
        }


        console.log(menuItem);
        const menuRes=await axiosSecure.post('/allmeals',menuItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }



    }




 

    return (
        <div className='py-10 bg-[#171717]'>
            <div className=''>
                <h2 className='text-4xl text-white pt-5'>Add Item Page</h2>
                <div className='mx-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control  my-6">
                            <label className="label">
                                <span className="label-text text-white">Meal title
                                    *</span>

                            </label>
                            <input type="text" placeholder="Recipe Name"
                                {...register('name')} required
                                className="input input-bordered w-full" />



                        </div>


                        <div className='flex justify-center gap-4'>

                            {/*categories*/}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Meal Category*</span>

                                </label>
                                <select defaultValue='default' {...register("category")} required
                                    className="select select-bordered w-full ">
                                    <option disabled value="default">Select a category</option>
                                    <option value="breakfast">breakfast</option>
                                    <option value="lunch">lunch</option>
                                    <option value="dinner">dinner</option>


                                </select>

                            </div>




                            {/* price */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Price*</span>

                                </label>
                                <input type="number" placeholder="price"
                                    {...register('price')}
                                    className="input input-bordered w-full" />

                            </div>


                        </div>
                        <div className='flex justify-center gap-4'>

                            {/*categories*/}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">  Rating

                                        *</span>

                                </label>
                                <input type="number" placeholder=" Rating
"
                                    {...register('Rating')}
                                    className="input input-bordered w-full" />

                            </div>




                            {/* price */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Date*</span>

                                </label>
                                <input type="date" placeholder="Date"
                                    {...register('Date')}
                                    className="input input-bordered w-full" />

                            </div>


                        </div>
                        <div className='flex justify-center gap-4'>

                            {/*categories*/}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">  Review

                                        *</span>

                                </label>
                                <input type="number" placeholder=" Review
"
                                    {...register('Review')}
                                    className="input input-bordered w-full" />

                            </div>




                            {/* price */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Likes*</span>

                                </label>
                                <input type="number" placeholder="price"
                                    {...register('Likes')}
                                    className="input input-bordered w-full" />

                            </div>


                        </div>
                        <div className='flex justify-center gap-4'>

                            {/*categories*/}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">  distributor Name*</span>

                                </label>
                                <input  defaultValue={user?.displayName || ''} type="text"  placeholder=" distributor Name"
                                    {...register('distributorName')}
                                    className="input input-bordered w-full" />

                            </div>




                            {/* price */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">distributor Email*</span>

                                </label>
                                <input  defaultValue={user?.email || ''} type="email" placeholder="distributor Email"
                                    {...register('distributorEmail')}
                                    className="input input-bordered w-full" />

                            </div>


                        </div>

                        <div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Ingredients*</span>

                                </label>
                                <textarea placeholder="Ingredients
"
                                    {...register('Ingredients')}
                                    className="input  w-full textarea textarea-bordered h-24" />

                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white"> Description*</span>

                                </label>
                                <textarea placeholder=" Description"
                                    {...register(' Description')}
                                    className="input  w-full textarea textarea-bordered h-24" />

                            </div>
                        </div>

                        <div>
                            <input  {...register('image')} placeholder='enter your Image URL' type="text" className="file-input  text-black file-input-bordered w-full  " />
                        </div>

                        <div className='flex justify-center mt-5'>
                            <button className='btn btn-outline text-white border-none bg-[#1f2937] mt-5 '> <FaUtensils></FaUtensils> Add Meal</button>
                            <button  className='btn btn-outline text-white border-none bg-[#1f2937] mt-5'> Upcoming Meal </button>


                         
                        </div>





                    </form>
                  
                </div>
            </div>
        </div>
    );
};

export default AddMeals;