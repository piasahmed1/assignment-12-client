
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderCard from './OrderCard/OrderCard';
import UseMeals from '../../../Hook/UseMeals';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cover from './OrderCard/Cover';
import img from '../../../assets/banner3.jpg'
import axios from 'axios';
const MealCategories = () => {

    const categories = ['breakfast', 'lunch', 'dinner'];
    const { categorie } = useParams();

    const initianIndex = categories.indexOf(categories)




    // const [meals]=UseMeals([]);
     const [meals, setmeals] = useState([]);
   
    useEffect(() => {
        fetch('https://assigment-12-server-zeta.vercel.app/allmeals')
            .then(res => res.json())
            .then(data => {
                setmeals(data)

            })
    }, [])

   






    const [tabindex, settabindex] = useState(0)

    const breakfast = meals.filter(item => item.category === 'breakfast')
    const lunch = meals.filter(item => item.category === 'lunch')
    const dinner = meals.filter(item => item.category === 'dinner')
    const all = meals;
    


    return (
        <div className='my-20'>
            <h1 className='text-center text-5xl font-bold '>Meals category</h1>
            {/* <Cover img={img} title={'Meals category'}></Cover> */}
       
            <div>
                <Tabs className=" my-20 text-center space-x-4 border-none max-w-screen-xl mx-auto " defaultIndex={tabindex} onSelect={(index) => settabindex(index)}>
                    <TabList className="btn btn-outline bg-[#1f2937] text-white">
                        <Tab>Breakfast</Tab>
                        <Tab>Lunch</Tab>
                        <Tab>Dinner</Tab>
                        <Tab>All Meals</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderCard item={breakfast}></OrderCard>
                    </TabPanel>
                    <TabPanel>
                        <OrderCard item={lunch}></OrderCard>
                    </TabPanel>
                    <TabPanel>
                        <OrderCard item={dinner}></OrderCard>
                    </TabPanel>
                    <TabPanel>
                        <OrderCard item={all}></OrderCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MealCategories;