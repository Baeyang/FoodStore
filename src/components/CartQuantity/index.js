import { useSelector } from 'react-redux';
import {ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { getCookie } from '../../helper/Cookie';
function CartQuantity () {
    const cartRedux = useSelector(state=>state.cartReducer)
    const data = getCookie('cart')
    const cart = data ? JSON.parse(data) : []

    const total = cart.length > 0 ? cart.reduce((sum,item)=>{
        return sum + item.quantity
            },0) : 0

        return(
        <>
        <Link to = 'cart'> <Button icon={<ShoppingCartOutlined />}> Giỏ hàng ({total}) </Button> </Link>
        </>
    )
}

export default CartQuantity