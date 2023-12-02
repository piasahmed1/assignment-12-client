import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

import img from '../assets/login.png'
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';
import auth from './Firebase.config';
import UseAxiosPublic from '../Hook/UseAxiosPublic';


const Login = () => {
    const navigate = useNavigate()
    const { signIn, googleLogin } = useContext(AuthContext)
    const location = useLocation();



    const handlelogin = event => {




        event.preventDefault();



        const email = event.target.email.value;
        const password = event.target.password.value
        console.log(email, password);

        signIn(email, password)

            .then(result => {
                console.log(result)
                toast.success('Login successfully')
                navigate('/');
                // const userInfo = {
                //     email: result.user?.email,
                //     name: result.user?.displayName
                // }


                // axiospublic.post('/users', userInfo)
                //     .then(res => {
                //         console.log(res.data);
                //         navigate('/')
                //     })
            })
            
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })




    }


    const axiospublic = UseAxiosPublic();


    const handlegoogle = () => {


        googleLogin(auth)
            .then(res => {
                console.log(res);
                toast.success('Login successfully')
                navigate('/');

                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.name
                }


                axiospublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })
            })


            .catch(error => {
                console.log(error);

            })
    }

    return (
        <div className='bg-[#f5f6fa]'>

            <div className='flex h-screen justify-around py-20 items-center max-w-screen-xl mx-auto '>
                <div className='flex-1/2  '>
                    <img src={img} alt="" />

                </div>


                <div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body bg-black rounded-xl">
                            {/* <form onSubmit={handlelogin} > */}
                            <form onSubmit={handlelogin}>
                                <div className="form-control">
                                    <h1 className='text-3xl font-bold mb-5 text-white'>Login your account</h1>
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='email' required placeholder="email" className="input input-bordered text-black" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" required name='password' placeholder="password" className="input input-bordered text-black" />



                                </div>





                                <div className="form-control mt-6">
                                    {/* <button className="btn border-none text-white bg-[#03a84e]">Login</button> */}


                                    {/* apatoto disable false kore rakhsi */}
                                    <input disabled={false} className='btn border-none text-white bg-[#03a84e]' type="submit" value="Login" />
                                </div>


                            </form>

                            <p className='text-white'>New here? please <Link to="/register">
                                <button className='btn btn-link text-white'>Register</button>

                            </Link> </p>
                            <button onClick={handlegoogle} className='btn text-black  hover:bg-[#1f2937] hover:text-white '>
                                <FaGoogle></FaGoogle>  Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;