/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null) 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google
const googleProvider = new GoogleAuthProvider();

const googleSignIn = () => { 
  return signInWithPopup(auth, googleProvider);
}

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURl: photo
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // console.log('current user', currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    })

    const authInfo = {
        googleSignIn,
        createUser,
        signIn,
        user,
        loading,
        logOut,
        updateUserProfile
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;