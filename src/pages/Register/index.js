import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { set,ref } from "firebase/database"
import { db } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { generateToken } from "../../helper/GenerateToken"

function Register(){
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        var username = e.target[0].value
        var email = e.target[1].value
        var password = e.target[2].value

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                set(ref(db, 'users/'+user.uid),{
                    username : username,
                    password : password,
                    email : email,
                    token : generateToken()
                })
                alert('created user')
                navigate("/login")
            })
            .catch((error)=>{
                const errorCode = error.errorCode
                const errorMessage = error.message
                alert(errorMessage)
            })
            
    }
    return(
        <>
            <>
            <h1>
                Đăng ký 
            </h1>
            <form onSubmit={handleSubmit}>
                <div><input type='text' name='user name' placeholder="Nhập username"></input></div>
                <div><input type='email' name='email' placeholder="Nhập email"></input></div>
                <div><input type='password' name='password' placeholder="Nhập mật khẩu"></input></div>
                <div><button type = 'submit' name='sign up'>Đăng ký </button></div>
            </form>
        </>

        </>

    )
}

export default Register