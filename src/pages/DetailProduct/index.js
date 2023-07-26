import { useParams } from "react-router-dom"
import { db ,get, ref} from "../../firebase"
import { useState } from "react"
import { useEffect } from "react"
import {Container} from "@mui/material"
import './DetailProduct.css'
import { useDispatch, useSelector } from "react-redux"
import { addtoCart, updateCart } from "../../actions/cart";
import { Button,Row,Col } from "antd";

function DetailProduct(){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer)

    const handleAddToCart = () => {
        if(cart.some(itemcart => itemcart.id === detailProduct.id)){
            dispatch(updateCart(detailProduct.id))
        }
        else{
            dispatch(addtoCart(detailProduct.id,detailProduct))
        }
    }
    const [detailProduct,setdetailProduct] = useState([])
    const param = useParams()
    console.log(param)
    useEffect(()=>{
        const fetchApi = async() => {
            get(ref(db,`products/${param.id}`))
                .then(snapshot=>{
                    var data = snapshot.val()
                    setdetailProduct(data)
                })
        }
        fetchApi();
    },[])

    return(<>
     <Container sx={{paddingLeft:3, paddingRight:3, paddingTop:2}} >
        <Row>
            <Col xl ={12} lg={14} md={14} sm={24} xs={24}>
                <div className="DetailProduct__image"> 
                    <img src={detailProduct.thumbnail} alt='img'></img>
                </div>
            </Col>

            <Col xl={{span:10,offset:2}} lg={{span:8,offset:2}}  md={{span:9,offset:1}} sm={24} xs={24}>
                <div className="Detail__Product">
                    <div className="DetailProduct__title">{detailProduct.title}</div>
                    <div className="DetailProduct__price">Giá: {detailProduct.price}</div>
                    <div className="DetailProduct__des">Mô tả: {detailProduct.description}</div>
                    <div className="DetailProduct__rate">Đánh giá: {detailProduct.rating}</div>
                    <div className="Productadd">
                        <Button onClick={handleAddToCart}> Chọn Mua </Button>
                    </div>
                </div>
            </Col>
        </Row>
     </Container>
    </>)
}

export default DetailProduct