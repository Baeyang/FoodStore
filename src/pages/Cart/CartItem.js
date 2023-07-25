import { useDispatch } from "react-redux"
import { deleteItem, updateCart } from "../../actions/cart"
import { useRef } from "react"
import { Button } from "antd";

function CartItem(props){
    const {item} = props
    const dispatch = useDispatch()
    const inputRef = useRef()


    const handleUp = () => {
        dispatch(updateCart(item.id))
        inputRef.current.value = parseInt(inputRef.current.value) + 1
    }
    const handleDown = () => {
        if(item.quantity > 1){
            dispatch(updateCart(item.id,-1))
            inputRef.current.value = parseInt(inputRef.current.value) - 1
        }
    }

    const handleDel = () => {
        dispatch(deleteItem(item.id))
    }
    return(
        <>         <div  className="cart__item" key={item.info.id}>
                    <div className="cart__content">
                        <div className="cart__image">
                            <img src={item.info.thumbnail} alt='img'></img>
                        </div>
                        <div className="cart__info">
                            <div className="cart__title">Tên : {item.info.title}</div>
                            <div className="cart__price">Giá : {item.info.price}</div>
                        </div>
                    </div>
                    
                    <div className="cart__quantity">
                        <div className="cart__value">
                            <button onClick={handleDown}>-</button>
                            <input ref={inputRef} defaultValue={item.quantity}></input>
                            <button onClick={handleUp}>+</button>
                        </div>
                        {/* <div className="cart__check">
                        <Checkbox onClick={handleTick}>Chọn thanh toán</Checkbox>   
                        </div> */}
                        
                        <div className="cart__clear">
                            <Button type = "primary" danger onClick={handleDel} size="small">
                                 Xóa
                            </Button>
                        </div>

                    </div>
                    </div>
        </>
    )
}

export default CartItem