import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();




// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)


    }

    // google provider 
   
    // const facebookProvider = new FacebookAuthProvider();
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const info = {
        user,
        loading,
        userCreate,
        signIn,
        googleSign,
        logOut,

    }
    return (
        <AuthContext.Provider state={true} value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;