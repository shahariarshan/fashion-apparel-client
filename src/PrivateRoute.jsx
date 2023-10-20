import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location = useLocation()

if(loading){
    return <span className="loading loading-bars loading-xs"></span>
    
}

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
    ;
};

export default PrivateRoute;