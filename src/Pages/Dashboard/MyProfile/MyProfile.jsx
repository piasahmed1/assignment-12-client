import { useContext } from 'react';
import img from '../../../assets/login.png'
import { AuthContext } from '../../../Authintication/AuthProvider'
import img3 from '../../../assets/realistic-bronze-award-medal-with-red-ribbons-engraved-number-three-premium-badge-winners-achievements_88188-4075.jpg'
import img2 from '../../../assets/luxury-gold-badge-vector-20859291.jpg'
const MyProfile = () => {


    const { user } = useContext(AuthContext);

    return (

        <div className='h-screen flex items-center justify-center'>
            <div className='bg-white w-96 rounded-xl shadow-lg transition duration-300 ease-in-out p-10 border text-black text-center'>


                <img className='w-24 h-24 rounded-full mx-auto mb-4' src={user.photoURL} alt="User Profile" />

                <p className='text-2xl font-bold mb-2'>{user?.displayName}</p>
                <p className='text-lg font-semibold text-gray-600 mb-2'>{user.email}</p>
                <div className='py-2 flex justify-center items-center'>

                    {
                        user?.email
                            ? <img className='w-28 rounded-full' src={img3} alt="" />
                            : <img className='w-24 rounded-full' src={img2} alt="" />
                    }



                </div>

            </div>
        </div>

    );
};

export default MyProfile;