import { signInWithEmailAndPassword } from "firebase/auth"
import { db, set, get } from "../../firebase"
import { ref,update} from "../../firebase"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { setCookie } from "../../helper/Cookie"
import { useDispatch } from "react-redux"
import { checkLogin } from "../../actions/login"
function Login(){
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
                const errorCode = error.code;
                const errorMessage = error.message
                alert(errorMessage)
            })
    }
    
    
    return(
        <>
            <h1>
                Đăng nhập 
            </h1>
            <form onSubmit={handleSubmit}>
                <div><input type='email' name='' placeholder="Nhập email"></input></div>
                <div><input type='password' name='' placeholder="Nhập mật khẩu"></input></div>
                <div><button type = 'submit'>Đăng nhập </button></div>
            </form>
        </>

    )
}

export default Login