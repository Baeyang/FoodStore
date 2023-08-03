import CartItem from "./CartItem";
import { getCookie } from "../../helper/Cookie";
import './cart.css'

function CartList(){
    const data = getCookie('cart')
    const cart = data ? JSON.parse(data) : []
    return(
    <>
        <table className="cart__table">
            <thead>
                <tr>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Giá tiền</th>
                    <th>Số lượng</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
            {cart.map((item,index)=>(
                <CartItem  item={item} key={index}/>
            ))}
            </tbody>
        </table>
    </>
    )
}
export default CartList 