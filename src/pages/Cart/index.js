import { useDispatch, useSelector } from "react-redux"
import CartList from "./CartList"
import './cart.css'
import { deleteCart } from "../../actions/cart"
import { getCookie } from "../../helper/Cookie"
import { Button } from "antd"
import { Link } from "react-router-dom"

function Cart(){
    
    // Gọi ra nếu dữ liệu giỏ hàng lưu trong store thay đổi thì render lại
    const cartRedux = useSelector(state => state.cartReducer)
    console.log(cartRedux)
    // Lấy data từ cookie để trả về giỏ hàng 
    const data = getCookie('cart')
    const cart = data ? JSON.parse(data) : []
    const total = cart.reduce((sum,item)=>{
        return sum+item.info.price*item.quantity
    },0)
    const dispatch = useDispatch()
    const handleDelAll = () => {
        dispatch(deleteCart())
    }

    console.log(cart)
    return(
        <>
        <div className="cart">
            <div className="cart__top">
            <h1> GIỎ HÀNG </h1>
            <div className="cart_clear"> 
                <Button type = "primary" danger onClick={handleDelAll}> Xóa tất cả</Button> </div>
            </div>
            

            {cart.length > 0 ? (
                <>
                <CartList ></CartList>
                <div className="cart__pay-info">

                </div>
                <div className="cart__total">
                    Tổng tiền : {total} $
                </div>
                <div className="cart__pay-box">
                    <button className="cart__pay-button">
                        <Link to = '/checkout'>THANH TOÁN NGAY</Link>
                    </button>
                </div>
                </>
            ):(
                <p>Giỏ hàng của bạn đang trống</p>
            )}
        </div>
        </>
    )
}

export default Cart