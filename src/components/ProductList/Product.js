
import { useDispatch, useSelector } from "react-redux"
import { addtoCart, updateCart } from "../../actions/cart";
import { Button } from "antd";
import { Link } from "react-router-dom";
function Product(props){
    const {item} = props
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer)

    const handleAddToCart = () => {
        if(cart.some(itemcart => itemcart.id === item.id)){
            dispatch(updateCart(item.id))
        }
        else{
            dispatch(addtoCart(item.id,item))
        }
    }
    return(
        <>      
                <div className="Product__item" key={item.index}>
                    
                    <Link to = {`product/${item.id}`}> 
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
                    <div className="Product__add">
                        <Button onClick={handleAddToCart}> Chọn Mua </Button>
                    </div>
                </div>
        </>
    )
}

export default Product