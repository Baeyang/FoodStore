import { HomeFilled,LoginOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import CartQuantity from '../../components/CartQuantity';
import {Button} from 'antd';
import { getCookie } from "../../helper/Cookie";
import { useSelector } from "react-redux";
function Header(){
    const token = getCookie('token')
    const isLogin = useSelector(state => state.loginReducer)

    return(
        <div className="Layout-default__header">
                    <div className="container">
                        <div className="Layout-default__wrap">
                            <div className="Layout-default__logo">
                                <Link to = '/'> 
                                <Button icon = {<HomeFilled/>} className='button-home'></Button>
                                </Link>
                            </div>
                            {/* <div className="Layout-default__item">
                                <ul>
                                    <li> 
                                        <Link to = 'post'>
                                        Diễn đàn
                                        </Link>
                                    </li>
                                    <li> 
                                        <Link to = 'about'>
                                        Giới thiệu
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                            
                            <div className="Layout-default__account">
                                <CartQuantity/>
   
                                <Link to = 'login'> 
                                    <Button icon={<LoginOutlined />}>
                                    For Admin
                                    </Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Header