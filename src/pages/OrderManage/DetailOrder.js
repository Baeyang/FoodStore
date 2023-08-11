import { useNavigate, useParams } from "react-router-dom"
import {ref,db,get,update} from '../../firebase'
import { useState,useEffect } from "react"
import { Card,Col,Row,Select,Form,Button,message,Spin } from "antd"
import axios from 'axios';
import GoBack from "../../components/Goback"
import './OrderManage.css'

function DetailOrder(){

    const param = useParams()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [detailOrder, setDetailOrder] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
        //twilio account
    const url = 'https://api.twilio.com/2010-04-01/Accounts/AC37c663c8e7b621251c006fe1e86dec42/Messages.json'
    const auth = {
        username: 'AC37c663c8e7b621251c006fe1e86dec42',
        password: '8adefb5d1a2f4328c0c72dc2397038d4'
    };
    useEffect(()=>{
        const fetchApi = async() => {
            get(ref(db,`order/${param.id}`))
                .then(snapshot=>{
                    var data = snapshot.val()
                    setDetailOrder(data)
                    setLoading(true)
                })
        }
        fetchApi();
    },[])
    console.log(detailOrder.status)
    const foods = detailOrder.ordered ? detailOrder.ordered : []

    const onFinish = async (value) => {
        const data = new URLSearchParams()
        data.append('To', detailOrder.phone)
        data.append('From', '+14705704514')
        data.append('Body', `Đơn hàng của bạn: ${detailOrder.id} - ${value.status}`)
        try{
            const response = await axios.post(url,data,{auth})
            console.log(response.data)
        }
        catch(error){
            console.error(error)
        }
        const res = await update(ref(db,`order/${param.id}`),{
            status : value.status
        })
        console.log(res)
        if(res!== null){
            messageApi.open({
                type: 'success',
                content: 'Cập nhật trạng thái thành công',
                className: 'custom-class',
                style: {
                  marginTop: '10vh',
                },
              });
            setTimeout(() => {
                navigate(-1)
            }, 1000);
        }else{
            messageApi.open({
                type: 'error',
                content: 'Cập nhật trạng thái thất bại',
                className: 'custom-class',
                style: {
                  marginTop: '10vh',
                },
              });
        }

        return res
    }

    return(
        <>
        {contextHolder}
        <GoBack></GoBack>
        <h1> Chi tiết đơn hàng</h1>
        { isLoading ? 
        (<Row>
            <Col xs={24}>
            <Card title = {`Mã đơn hàng: ${param.id}`}>
                <div className="Detail-Order__status">
                    <Form form={form} layout="vertical" onFinish={onFinish} className="Detail-Order__form"> 
                        <Form.Item label = 'CHỈNH TRẠNG THÁI ĐƠN HÀNG:' name='status' initialValue={detailOrder.status}>
                            <Select 
                                style={{
                                    width: 150,
                                }}
                                options={[
                                    {
                                    value: 'Đang chờ',
                                    label: 'Đang chờ',
                                    },
                                    {
                                    value: 'Đang giao hàng',
                                    label: 'Đang giao hàng',
                                    },
                                    {
                                    value: 'Hoàn thành',
                                    label: 'Hoàn thành',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">LƯU</Button>
                        </Form.Item>

                    </Form>
                </div> 
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
        </Row>) : (
            <>
            <Row>
                <Spin className="loading"  size="large"/>
            </Row>
            </>)
        }
        </>
    )
}

export default DetailOrder