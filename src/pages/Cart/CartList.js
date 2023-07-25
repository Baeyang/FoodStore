import CartItem from "./CartItem";
import { getCookie } from "../../helper/Cookie";

function CartList(){
    const data = getCookie('cart')
    const cart = data ? JSON.parse(data) : []
    return(
    <>
            {cart.map((item,index)=>(
                
                <div key={index} className="cart__items">
                    <CartItem  item={item} />
                </div>
                
            ))}
        
    </>
    )
}
export default CartList 