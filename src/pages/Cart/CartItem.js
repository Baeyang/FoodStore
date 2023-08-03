import { useDispatch } from "react-redux"
import { deleteItem, updateCart } from "../../actions/cart"
import { useRef } from "react"
import { Button } from "antd";
import {MinusOutlined, PlusOutlined} from '@ant-design/icons'
import './cart.css'
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
                                <tr>
                                    <td>
                                    <div className="cart__image">
                                        <img src={item.info.thumbnail} alt='img'></img>
                                    </div>
                                    </td>
                                    <td>
                                    <div className="cart__title">{item.info.title}</div>
                                    </td>
                                    <td>
                                    <div className="cart__price">{item.info.price}</div>
                                    </td>
                                    <td>
                                        <div className="cart__quantity">
                                            <div className="cart__value">
                                                <MinusOutlined onClick={handleDown}/>
                                                <input ref={inputRef} defaultValue={item.quantity}></input>
                                                <PlusOutlined onClick={handleUp}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="cart__clear">
                                        <Button type = "primary" danger onClick={handleDel} size="small">
                                            Xóa
                                        </Button>
                                    </div>
                                    </td>
                                </tr>
    )
}

export default CartItem

// <div  className="cart__item" key={item.info.id}>
// <div className="cart__content">
//     <div className="cart__image">
//         <img src={item.info.thumbnail} alt='img'></img>
//     </div>
//     <div className="cart__info">
//         <div className="cart__title">Tên : {item.info.title}</div>
//         <div className="cart__price">Giá : {item.info.price}</div>
//     </div>
// </div>

// <div className="cart__quantity">
//     <div className="cart__value">
//         <MinusOutlined onClick={handleDown}/>
//         <input ref={inputRef} defaultValue={item.quantity}></input>
//         <PlusOutlined onClick={handleUp}/>
//     </div>
//     {/* <div className="cart__check">
//     <Checkbox onClick={handleTick}>Chọn thanh toán</Checkbox>   
//     </div> */}
    
//     <div className="cart__clear">
//         <Button type = "primary" danger onClick={handleDel} size="small">
//              Xóa
//         </Button>
//     </div>

// </div>
// </div>