
import { useDispatch, useSelector } from "react-redux"
import { addtoCart, updateCart } from "../../actions/cart";
import { Link } from "react-router-dom";
import { notification } from "antd";
function Product(props){
    const {item} = props
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer)
    const [noti, contextHolder] = notification.useNotification();

    const handleAddToCart = () => {
        if(cart.some(itemcart => itemcart.id === item.id)){
            dispatch(updateCart(item.id))
            noti.success({
                duration: 2,
                message: `Thêm vào giỏ hàng thành công!`,
                // description: "Cảm ơn bạn đã đặt hàng!",
                style: {
                    marginTop: '8vh',
                  }
            });
        }
        else{
            dispatch(addtoCart(item.id,item))
            noti.success({
                duration: 2,
                message: `Thêm vào giỏ hàng thành công!`,
                // description: "Cảm ơn bạn đã đặt hàng!",
                style: {
                    marginTop: '8vh',
                  }
            });
        }
    }
    return(
        <>      
        {contextHolder}
                <div className="Product__item" key={item.index}>
                    <Link to = {`/product/${item.id}`}> 
                    <div className="Product__image">
                        <img src={item.thumbnail} alt='img'></img>
                    </div>
                    <div className="Product__title">
                        {item.title}
                    </div>
                    </Link>
                    <div className="Product__price">
                        Giá : {item.price}
                    </div>
                    <div className="button ml-5 mr-5 mt-10">
                        <button onClick={handleAddToCart}> Chọn Mua </button>
                    </div>
                </div>
        </>
    )
}

export default Product