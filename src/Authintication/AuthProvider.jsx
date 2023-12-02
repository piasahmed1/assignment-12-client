import React, { createContext, useEffect, useState } from 'react';

// import { createUserWithEmailAndPassword} from 'firebase/auth';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from './Firebase.config';
import UseAxiosPublic from '../Hook/UseAxiosPublic';


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    //jwt
    const axiosPublic = UseAxiosPublic();


    const CreateUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }


    ///

    


  



    //google section

    const googleprovider = new GoogleAuthProvider();

    //google login  

    const googleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the auth state changed", currentUser);

            setuser(currentUser)



            if (currentUser) {
                //get token and store client
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);

                        }
                    })
            }
            else {
                //
                localStorage.removeItem("access-token");
            }





            setloading(false)

        })
        return () => {
            unsubscribe();
        }
    }, [UseAxiosPublic])

    const AuthInfo = { CreateUser, loading, signIn, logout, user, googleLogin }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;