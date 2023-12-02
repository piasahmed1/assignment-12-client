import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAdmin from '../Hook/UseAdmin';
import { AuthContext } from '../Authintication/AuthProvider';

const AdminRoute = ({children}) => {


    const {user,loading}=useContext(AuthContext);
    const [isadmin,isAdminLoading]=UseAdmin();


    const location = useLocation();
    console.log(location.pathname);

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }


    if (user && isadmin) {
        return children;
    }


    return <Navigate state={{from:location}} to="/login" replace></Navigate>
  
    
};

export default AdminRoute;