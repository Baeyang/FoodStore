import { useSelector } from 'react-redux';
import {ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Badge } from 'antd';
import { getCookie } from '../../helper/Cookie';
import './CartQuantity.css'
function CartQuantity () {
    const cartRedux = useSelector(state=>state.cartReducer)
    const data = getCookie('cart')
    const cart = data ? JSON.parse(data) : []

    const total = cart.length > 0 ? cart.reduce((sum,item)=>{
        return sum + item.quantity
            },0) : 0

        return(
        <>
        <Link to = 'cart'>
        <Badge count={total} size='small'>
            <ShoppingCartOutlined  className='cart__icon'/> 
        </Badge>
        </Link>
        </>
    )
}

export default CartQuantity