import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Membership = () => {


  const [Membership, setmembership] = useState([]);

  useEffect(() => {
    fetch('https://assigment-12-server-zeta.vercel.app/membership')
      .then(res => res.json())
      .then(data => setmembership(data))
  }, [])






  return (
    <div className="container mx-auto my-20">
      <h2 className="text-5xl font-bold mb-8 text-center py-10">Upgrade Your Membership</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


        {
          Membership.map((item, index) => <div key={index}>

            <div className="bg-gradient-to-r from-[#9bafd9] to-[#103783] p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-4">{item.gold}</h3>
              <p className="text-gray-800 mb-4 font-bold text-2xl">Enhanced Features</p>
              <ul className="text-black-600 mb-4">
                <li>{item.features[0]}</li>
                <li>{item.features[1]}</li>
                <li>{item.features[2]}</li>
                <li>{item.features[3]}</li>

              </ul>
              <p className="text-2xl font-bold text-white mb-4">$ {item.price}/month</p>
              <Link to={`/membership/${item._id}`} >

                <button className="bg-[#171717] text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out">
                  Upgrade to {item.type}
                </button>
              </Link>
            </div>

          </div>)
        }



      </div>
    </div>

  );
};

export default Membership;