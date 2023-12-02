import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Authintication/AuthProvider';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Swal from 'sweetalert2';
import axios from 'axios';

const MealCard = ({ item }) => {
  
  const { title, image, rating, price, _id } = item;


  const { user } = useContext(AuthContext)

  const navigate = useNavigate()


  // const handleAddToCart = (food) => {
    // console.log(food, user.email);


    // if (user && user.email) {
      //sent cart item to the database
      // const cartItem = {
      //   menuId: _id,
      //   email: user.email,
      //   title,
      //   image,
      //   rating
      // }


        //ites not formal methos.alltime use hooks.
      // axios.post('https://assigment-12-server-zeta.vercel.app/carts',cartItem)
      // .then(res=>{
      //   console.log(res.data);
      // })



  //   }

  //   else {

  //     Swal.fire({
  //       title: "you are not logged in",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, Login"
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         //sent the user to the login page
  //         // navigate('/login',{state:{from:location}})
  //         navigate('/login')
  //       }
  //     });
  //   }





  // }

  return (
    <div>
      <div className="card lg:w-96  bg-[#171717] shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <figure><img className='lg:h-[400px] w-full' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className=" text-center">{title}</h2>
          <p>{price} $</p>
          <div className='flex justify-center'>
            <Rating className='text-center' style={{ maxWidth: 180 }} value={rating} readOnly />
          </div>
          <p></p>
          <div className="card-actions justify-center">

           <Link to={`/meal/${_id}`}>
           <AwesomeButton type="primary" className="btn bg-red-700 text-white">Details</AwesomeButton>


           </Link>

          </div>
        </div>
      </div>
    </div>
  );
};
// onClick={() => handleAddToCart(item)}
// 
export default MealCard;
