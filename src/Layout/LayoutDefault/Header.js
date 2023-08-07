import { HomeFilled } from '@ant-design/icons';
import { Link, NavLink } from "react-router-dom";
import CartQuantity from '../../components/CartQuantity';
import { getCookie } from "../../helper/Cookie";
import { useSelector} from "react-redux";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear,faBars } from '@fortawesome/free-solid-svg-icons';
import { Drawer } from 'antd';

function Header(){
    const token = getCookie('token')
    const isLogin = useSelector(state => state.loginReducer)
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    }
      const onClose = () => {
        setOpen(false);
    }
    const navLinkstyle = ({isActive}) => {
        return{
            color :  isActive ? '#3CB815' : 'black'
        }
    }

    return(
        <div className="Layout-default__header">
                    <div className="container">
                        <div className="Layout-default__wrap">
                            <div className='Layout-default__bar'>
                                <FontAwesomeIcon icon={faBars} onClick={showDrawer} />
                                <Drawer zIndex={100000} width={300} title={<div className="drawer-title"><Link onClick={onClose} to='/'>VMO Foods</Link></div>} placement="left" onClose={onClose} open={open}>
                                <div className='Layout-default__menu-mobile'>
                                    <ul>
                                        <li>
                                            <NavLink to ='/product' onClick={onClose} style={navLinkstyle}>Sản phẩm</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to ='/post' onClick={onClose} style={navLinkstyle}>Bài đăng</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                </Drawer>
                        
                            </div> 
                            <div className="Layout-default__logo">
                                <Link to = '/' > 
                                <HomeFilled className='home-icon'/>
                                </Link>
                            </div>
                            <div className='Layout-default__menu'>
                                <NavLink to ='/product' style={navLinkstyle}>Sản phẩm</NavLink>
                                <NavLink to ='/post' style={navLinkstyle}>Giới thiệu</NavLink>
                            </div>                           
                            <div className="Layout-default__account">
                                <div className='Layout-default__cart'>
                                    <CartQuantity/>
                                </div>
                                
                                <div className='Layout-default__login'>
                                    <Link to = 'login'> 
                                        <FontAwesomeIcon icon={faUserGear} />
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Header