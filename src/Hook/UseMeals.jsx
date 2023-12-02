import React, { useContext, useEffect, useState } from 'react';
import UseAxiosPublic from './UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Authintication/AuthProvider';

const UseMeals = () => {

    const axiospublic = UseAxiosPublic();
    const { user } = useContext(AuthContext)


    // const [meals, setmeals] = useState([]);

    // useEffect(() => {
    //     fetch('https://assigment-12-server-zeta.vercel.app/allmeals')
    //         .then(res => res.json())
    //         .then(data => {
    //             setmeals(data)

    //         })
    // }, [])

    // const { data: meals = [], isPending: loading, refetch } = useQuery({
    //     queryKey: ['meal'],
    //     queryFn: async () => {

    //         const res = await axiospublic.get(`/carts?email=${user.email}`);

    //         return res.data;
    //     }
    // })


    const { data: meals = [], refetch } = useQuery({
        queryKey: ['meal'],
        queryFn: async () => {

            const res = await axiospublic.get('/allmeals');

            return res.data;
        }
    })

    return [meals, refetch]

};

export default UseMeals;