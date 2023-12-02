import axios from 'axios';
import React from 'react';



const axiospublic = axios.create({

    baseURL: 'https://assigment-12-server-zeta.vercel.app'
})
const UseAxiosPublic = () => {
    return axiospublic;
};

export default UseAxiosPublic;