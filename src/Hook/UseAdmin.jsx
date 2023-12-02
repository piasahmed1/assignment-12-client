import React, { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Authintication/AuthProvider';

const UseAdmin = () => {
    const { user } = useContext(AuthContext)

    const axiosSecure = UseAxiosSecure();
    const { data: isadmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isadmin"],
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isadmin, isAdminLoading]
};

export default UseAdmin;