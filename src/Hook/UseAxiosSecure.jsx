import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Authintication/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://assigment-12-server-zeta.vercel.app'
})


const UseAxiosSecure = () => {

    // const { logout } = useContext(AuthContext);
    // const navigate = useNavigate();

    // // request interceptor to add authorization header for every secure call to teh api
    // axiosSecure.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('access-token')
    //     // console.log('request stopped by interceptors', token)
    //     config.headers.authorization = `Bearer ${token}`;
    //     return config;
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // });


    // // intercepts 401 and 403 status
    // axiosSecure.interceptors.response.use(function (response) {
    //     return response;
    // }, async (error) => {
    //     const status = error.response.status;
    //     // console.log('status error in the interceptor', status);
    //     // for 401 or 403 logout the user and move the user to the login
    //     if (status === 401 || status === 403) {
    //         // await logout();
    //         // navigate('/login');
    //     }
    //     return Promise.reject(error);
    // })


    return axiosSecure;



};

export default UseAxiosSecure;