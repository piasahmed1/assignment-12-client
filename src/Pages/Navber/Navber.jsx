import React from 'react';
import Mainlayout from '../../Layout/Mainlayout';
import Layout from './Layout';
import Sideber from './Sideber';
import img from '../../assets/Adnan.png'

const Navber = () => {
    return (
        <div className='fixed z-10 text-white bg-opacity-30 w-full bg-black'>
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className=" navbar  max-w-screen-xl mx-auto ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2"><img className='w-24 rounded-2xl' src={img} alt="" /> </div>

                        <div className="flex-none hidden lg:block">
                            
                          <Layout></Layout>
                        </div>
                    </div>
                    {/* Page content here */}
                   
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

                    <Sideber></Sideber>
                </div>
            </div>
        </div>
    );
};

export default Navber;