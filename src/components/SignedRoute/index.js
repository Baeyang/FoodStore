import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../helper/Cookie";
import { useSelector } from "react-redux";

function SignedRoute(){
    const isLogin = useSelector((state) => state.loginReducer)
    const token = getCookie("token")
    return(
        <>
            {(token || isLogin) ? (<Outlet></Outlet>) : (<Navigate to = 'login'/>)}
        </>
    )
}

export default SignedRoute