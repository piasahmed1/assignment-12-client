import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import img from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';
import UseAxiosPublic from '../Hook/UseAxiosPublic';



const Register = () => {
    const { CreateUser } = useContext(AuthContext)
    const Navigate = useNavigate()

    const axiospublic = UseAxiosPublic();
    const handleregister = event => {




        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const picture = event.target.picture.value;

        if (!/(?=.{6,})/.test(password)) {
            toast.error("At least 6 characters in total")
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            toast.error("At least 1 lowercase letter")
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error("At least 1 uppercase letter")
            return;
        }
        if (!/(?=.*[!@#\$%\^&\*])/.test(password)) {
            toast.error("At least 1 special character (!@#$%^&*)\n")
            return;
        }

        console.log(name, email, password, picture);

        CreateUser(email, password)
            .then(result => {
                console.log(result)
                toast.success('user created successfully')
                Navigate('/')

                const userInfo={name, email}
          
                  axiospublic.post('/users', userInfo)
                    .then(res => {
                      console.log(res.data);
                      Navigate('/')
                    })

            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            <div className='bg-[#f5f6fa]'>

                <div className='flex h-screen justify-around py-20 items-center max-w-screen-xl mx-auto '>
                    <div className='flex-1/2 '>
                        <img src={img} alt="" />

                    </div>

                    <div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl   ">
                            <div className="card-body bg-[#171717] rounded-xl">
                                {/* <form onSubmit={handlelogin} > */}
                                <form onSubmit={handleregister} >


                                    <div className="form-control">
                                        <h1 className='text-3xl font-bold mb-5 text-white'>Register your account</h1>
                                        <label className="label">
                                            <span className="label-text text-white">name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Photo URL</span>
                                        </label>
                                        <input type="text" name='picture' placeholder="Photo URL" className="input input-bordered text-black" required />
                                    </div>





                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
                                        <br />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#03a84e] text-white border-none">Register</button>
                                    </div>
                                </form>
                                <p className='text-white'>already have account? please
                                    <Link to="/login">
                                        <button className='btn btn-link text-[#03a84e]'>Login</button>


                                    </Link> </p>



                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;