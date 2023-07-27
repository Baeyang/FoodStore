import { useParams } from "react-router-dom"
import {ref,db,get} from '../../firebase'
import { useState,useEffect } from "react"
import { Card,Col,Row } from "antd"
import GoBack from "../../components/Goback"
function DetailOrder(){

    const param = useParams()
    console.log(param)
    const [detailOrder, setDetailOrder] = useState([])
    useEffect(()=>{
        const fetchApi = async() => {
            get(ref(db,`order/${param.id}`))
                .then(snapshot=>{
                    var data = snapshot.val()
                    setDetailOrder(data)
                })
        }
        fetchApi();
    },[])
    console.log(detailOrder)
    const foods = detailOrder.ordered ? detailOrder.ordered : []
    console.log(foods)
    return(
        <>
        <GoBack></GoBack>
        <h1> Chi tiết đơn hàng</h1>
        <Row>
            <Col xs={24}>
            <Card title = {`Mã đơn hàng: ${param.id}`}>
                <div className="Detail-Order__name">
                    <strong>Tên khách hàng :</strong> {detailOrder.name}
                </div>
                <div className="Detail-Order__address">
                    <strong> Địa chỉ giao hàng :</strong> {detailOrder.address}
                </div >
                <div className="Detail-Order__phone">
                    <strong>    Điện thoại :</strong> {detailOrder.phone}
                </div>
                <div className="Detail-Order__note">
                    <strong>   Lời nhắn : </strong>{detailOrder.note}
                </div>
                <div className="Detail-Order__foods">
                    <strong>   Danh sách món ăn : </strong>
                    {foods.length > 0 && foods.map((item,index)=>{
                        return(
                            <div className="Detail-Order__item" key = {index}>
                                <p> + {item.info.title}
                                <strong> - Số lượng: </strong>{item.quantity} 
                                <strong> - Đơn giá: </strong> {item.info.price} </p> 
                            </div>
                        )
                    })}
                </div>
                <div className="Detail-Order__status">
                    
                </div>
                <div>
                    <strong className="Detail-Order__price">
                        Tổng giá : {detailOrder.totalPrice}    
                    </strong>   
                </div> 

            </Card>
            </Col>
        </Row>
        </>
    )
}

export default DetailOrder