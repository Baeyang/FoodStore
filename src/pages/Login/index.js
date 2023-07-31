import { signInWithEmailAndPassword } from "firebase/auth"
import { db, get } from "../../firebase"
import { ref,update} from "../../firebase"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { setCookie } from "../../helper/Cookie"
import { useDispatch } from "react-redux"
import { checkLogin } from "../../actions/login"
import './login.css'
import {notification } from "antd"


function Login(){
    const [noti, contextHolder] = notification.useNotification();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault()
        var email = e.target[0].value
        var password = e.target[1].value
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                const user = userCredential.user
                const dt = new Date()
                    update(ref(db,'users/'+ user.uid),{
                        last_login : dt,
                    })
                    get(ref(db,'users/'+ user.uid))
                    .then(snapshot=>{
                        if(snapshot.exists()){
                            const dataUser = snapshot.val()
                            setCookie("id", user.uid, 1);
                            setCookie("username", dataUser.username, 1);
                            setCookie("email", dataUser.email, 1);
                            setCookie("token", dataUser.token, 1);
                        }
                    })
                    dispatch(checkLogin(true))
                    navigate("/admin");  
            })
            .catch((error)=>{
                // const errorCode = error.code;
                // const errorMessage = error.message
                let errorCustom = 'Tài khoản hoặc mật khẩu không đúng'
                noti.error({
                    description: errorCustom,
                    style: {
                        marginTop: '10vh',
                      }
                });
            })
    }
    
    return(
        <>
            {contextHolder}
            <div className="Login">
                <form onSubmit={handleSubmit} className="Login__form">
                    <div className="Login__form-inner">
                        <h1 className="Login__form-title">
                            Đăng nhập 
                        </h1>
                        <div className="Login__form-input"><input type='username' name='' placeholder="Tên đăng nhập" required></input></div>
                        <div className="Login__form-input" ><input type='password' name='' placeholder="Mật khẩu" required></input></div>
                        <div className="Login__form-button"><button type = 'submit'>Đăng nhập </button></div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Login