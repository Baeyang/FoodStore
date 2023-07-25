import { useNavigate } from "react-router-dom"
import { deleteAllCookies } from "../../helper/Cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Logout(){
    const dispatch = useDispatch()
    const navigate = useNavigate();
    deleteAllCookies();
    useEffect(()=>{
        dispatch(checkLogin(false))
        navigate("/login")
        
    },[])
    return(
        <>
        
        </>
    )
}

export default Logout