import React, { useEffect, useState } from 'react';
import UseMeals from '../../../Hook/UseMeals';
import Cover from '../../../Pages/Home/MealCategories/OrderCard/Cover';
import img from '../../../assets/image-asset.jpeg';
import OrderCard from '../../Home/MealCategories/OrderCard/OrderCard';
import MealCard from '../../Home/MealCategories/MealCard/MealCard';
import OrderCard2 from './OrderCard2';

const Meals = () => {


  // const [meals, setmeals] = UseMeals([]); // Assuming UseMeals returns a stateful value and a function to update it
  const [meals, setmeals] = useState([]); // Assuming UseMeals returns a stateful value and a function to update it

  useEffect(() => {
    fetch('https://assigment-12-server-zeta.vercel.app/allmeals')
      .then(res => res.json())
      .then(data => {
        setmeals(data)

      })
  }, [])

  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });






  const filteredOnSite = meals.filter((meal) =>
    meal.title?.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredByCategory =
    selectedCategory === '' || selectedCategory === 'all'
      ? filteredOnSite
      : filteredOnSite.filter((meal) => meal.category === selectedCategory);

  const filteredByPriceRange = filteredByCategory.filter(
    (meal) => meal.price >= priceRange.min && meal.price <= priceRange.max
  );

  return (
    <div className=''>
      <div>
     <img className='w-full mx-auto' src={img} alt="" />
        <div className='max-w-screen-xl mx-auto my-10'>
          <div className='flex justify-center items-center'>
            <input
              type='search'
              placeholder='Search Your Products...'
              className='input input-bordered bg-[#1f2937] lg:w-1/2 mx-auto text-white border-none'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>

          <div className='lg:flex lg:justify-center space-y-3 items-center   lg:my-4'>
            <label className='text-white mx-2'>Category:</label>
            <select
              className='input input-bordered bg-[#1f2937] text-white'
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value='all'>All Categgory</option>
              <option value='breakfast'>Breakfast</option>
              <option value='lunch'>Lunch</option>
              <option value='dinner'>Dinner</option>
            </select>

            <label className='text-black mx-2'>Price Range:</label>
            <input
              type='number'
              placeholder='Min'
              className='input input-bordered bg-[#1f2937] text-white mx-2'
              value={priceRange.min}
              onChange={(e) => {
                const value = +e.target.value;
                if (!isNaN(value)) {
                  setPriceRange({ ...priceRange, min: value });
                }
              }}
            />

          </div>

          <OrderCard2 item={filteredByPriceRange}></OrderCard2>
        </div>
      </div>
    </div>
  );
};

export default Meals;
