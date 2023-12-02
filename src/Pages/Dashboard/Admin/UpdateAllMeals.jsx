import React, { useContext } from 'react';
import { AuthContext } from '../../../Authintication/AuthProvider';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../../../Hook/UseAxiosSecure';
import Swal from 'sweetalert2';
import { FaUtensils } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const UpdateAllMeals = () => {
    const { register, handleSubmit, reset } = useForm()

    const { name, category, image, price, _id, Rating, Date, Review, Likes, distributorName, distributorEmail, Ingredients, Description } = useLoaderData()

    const axiosSecure = UseAxiosSecure();

    const { user } = useContext(AuthContext)

    const onSubmit = async (data) => {


        const menuItem = {
            name: data.name,
            category: data.category,
            price: data.price,
            Rating: data.Rating,
            Date: data.Date,
            Review: data.Review,
            Likes: data.Likes,
            distributorName: user.displayName,
            distributorEmail: user.email,
            Ingredients: data.Ingredients,
            Description: data.Description,

        }

        console.log(menuItem);
        const menuRes = await axiosSecure.patch(`/allmeals/${_id}`, menuItem);
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount > 0) {
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is updated to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
        }



    }

    return (
        <div className='py-10 bg-[#171717]'>
            <div className=''>
                <h2 className='text-4xl text-white pt-5'>Update Item </h2>
                <div className='mx-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control  my-6">
                            <label className="label">
                                <span className="label-text text-white">Meal title
                                    *</span>

                            </label>
                            <input type="text" placeholder="Recipe Name"
                                {...register('name')} required defaultValue={name}
                                className="input input-bordered w-full" />



                        </div>


                        <div className='flex justify-center gap-4'>

                            {/*categories*/}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Meal Category*</span>

                                </label>
                                <select defaultValue={category} {...register("category")} required
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
                                <input defaultValue={price} type="number" placeholder="price"
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
                                <input defaultValue={Rating} type="number" placeholder=" Rating
"
                                    {...register('Rating')}
                                    className="input input-bordered w-full" />

                            </div>




                            {/* price */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Date*</span>

                                </label>
                                <input defaultValue={Date} type="date" placeholder="Date"
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
                                <input defaultValue={Review} type="number" placeholder=" Review
"
                                    {...register('Review')}
                                    className="input input-bordered w-full" />

                            </div>




                            {/* price */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Likes*</span>

                                </label>
                                <input defaultValue={Likes} type="number" placeholder="price"
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
                                <input defaultValue={distributorName} type="text" placeholder=" distributor Name
"
                                    {...register('distributorName')}
                                    className="input input-bordered w-full" />

                            </div>




                            {/* price */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">distributor Email*</span>

                                </label>
                                <input defaultValue={distributorEmail} type="email" placeholder="distributor Email"
                                    {...register('distributorEmail')}
                                    className="input input-bordered w-full" />

                            </div>


                        </div>

                        <div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white">Ingredients*</span>

                                </label>
                                <textarea defaultValue={Ingredients} placeholder="Ingredients
"
                                    {...register('Ingredients')}
                                    className="input  w-full textarea textarea-bordered h-24" />

                            </div>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text text-white"> Description*</span>

                                </label>
                                <textarea defaultValue={Description} placeholder=" Description"
                                    {...register(' Description')}
                                    className="input  w-full textarea textarea-bordered h-24" />

                            </div>
                        </div>

                        <div>
                            <input defaultValue={image}  {...register('image')} type="file" className="file-input bg-black text-white file-input-bordered w-full " />
                        </div>

                        <div className='flex justify-around mt-5'>
                            <button className='btn btn-outline text-white border-none bg-[#1f2937] mt-5 '> <FaUtensils></FaUtensils> Update Meal</button>

                        </div>





                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAllMeals;