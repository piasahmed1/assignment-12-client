import React from 'react';
import img from '../../../assets/image-asset.jpeg'
const About = () => {

    return (
        <div>
            <p className='text-center font-bold lg:text-6xl text-4xl'> About </p>

            <hr className='w-1/2 mx-auto my-5' />
               <div className='max-w-screen-xl mx-auto  my-20'>


            <div className='flex flex-row items-center  p-10   justify-between  gap-5'>

                



                <div className='w-1/2'>
                    <div className='space-y-4 text-black'>

                     
                        
                        
                     
                        <p className='text-center text-xl text-[#767676]'>Founded in 2020, HostelHub is the brainchild of Adnan Rony, a passionate chef with a vision to blend traditional flavors with a modern twist. Our journey began with a commitment to provide exceptional food and warm hospitality to our guests. Over the years, we have become a beloved destination for those seeking a culinary adventure that tantalizes the taste buds.</p>
                    </div>
                   
                </div>





                <div className='flex gap-4 w-1/2'>
                  <img className='rounded-2xl' src={img} alt="" />
                  
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;