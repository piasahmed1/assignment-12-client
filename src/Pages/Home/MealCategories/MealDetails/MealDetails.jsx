import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Cover from '../OrderCard/Cover';
import img from '../../../../assets/image-asset.jpeg';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../../../Authintication/AuthProvider';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const MealDetails = () => {
  const loader = useLoaderData();
  const navigate = useNavigate()
  const { title, image, rating, price, _id,description,ingredients } = loader;

  const { user } = useContext(AuthContext);

  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const currentTime = new Date();

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    }






  };

  const handleAddToCart = (_id) => {
    console.log(user?.email);


    if (user && user.email) {
      //sent cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        title,
        image,
        rating,
        price,
        timeAdded: currentTime.toISOString(),
      }
      toast.success(`${title} added successfull`)


      // ites not formal methos.alltime use hooks.
      axios.post('https://assigment-12-server-zeta.vercel.app/carts', cartItem)
        .then(res => {
          console.log(res.data);
        })



    }

    else {

      Swal.fire({
        title: "you are not logged in",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          //sent the user to the login page
          // navigate('/login',{state:{from:location}})
          navigate('/login')
        }
      });
    }


  }

  return (
    <div className='py-10'>
      <Cover img={img}></Cover>


      
      <div className='max-w-screen-xl mx-auto my-10 lg:flex lg:justify-center'>

        {/* Card Section */}
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl mb-8 lg:mr-8">
          <figure>
            <img className='w-full h-64 object-cover' src={image} alt="Shoes" />
          </figure>
          <div className="card-body p-4">
            <p className='text-xl font-bold text-center'>{title}</p>
            <p className='text-xl font-bold text-center'>{price} $</p>
         

            <div className='flex justify-center'>
              <Rating className=''
                style={{ maxWidth: 180 }}
                value={rating}
                readOnly
              />
            </div>
            <div className='flex justify-between items-center'>

              <div>
                <h2 className="">
                  Distributor: <span className='text-xl'>{user?.displayName || 'none'}</span> </h2>
              </div>
              <div>
                <p>Time:</p>
              </div>
            </div>

            <div className="card-actions justify-between items-center mt-4">

              <button onClick={() => handleAddToCart(_id)} className='btn btn-outline bg-[#1f2937] text-white'>Meal Request</button>

              <div>
                <button className={`p-2 rounded-full ${isLiked ? 'bg-red-700' : 'bg-gray-300'}`} onClick={handleLikeClick}>
                  <FaHeart className={isLiked ? 'text-white' : 'text-red-700'}></FaHeart>
                </button>
                <span className='ml-2'>{likeCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className='bg-[#f5f6fa] w-full rounded-xl lg:w-1/2 p-4'>
          <div>
         
            <p className='text-center text-xl lg:text-2xl font-bold py-4 lg:py-14'> Ingredients</p>
            <hr className='py-2 lg:py-5 w-1/2 mx-auto' />
            <ol className='px-2 md:px-5  text-sm md:text-base lg:text-lg'>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                    <li>{ingredients[5]}</li>
            </ol>
            <p className='text-center text-xl lg:text-2xl font-bold py-4 lg:py-14'> description</p>

            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4">{description}</p>

              {/* <textarea placeholder='Wri' className='input mt-10 w-full textarea textarea-bordered h-24'></textarea> */}
            
          </div>
        </div>

      </div>




      <div className='text-center'>


        <Link to='/meals'>
          <button className='btn btn-outline w-1/3 bg-[#1f2937] text-center mx-auto text-white'>See All</button>
        </Link>
      </div>



    </div>
  );
};

export default MealDetails;
