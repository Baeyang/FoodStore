import { useState,useEffect } from "react"
import {ref,db,get} from '../../firebase'
import { Card ,Spin, Badge} from "antd"
function OrderStatistic(){
    const [orderData,setOrderData] = useState([])
    const [isLoading,setLoading] = useState(false)
    useEffect(()=>{
        const fetchApi = async() => {
            get(ref(db,'order'))
                .then(snapshot=>{
                    var data = Object.values(snapshot.val())
                    if(data){
                        let object = {
                            total : 0,
                            shipping : 0,
                            done : 0,
                            waiting : 0,
                        }
                        object.total = data.length
                        data.forEach(item=>{
                            switch (item.status) {
                                case 'Đang chờ':
                                    object.waiting += 1
                                    return object.waiting
                                case 'Đang giao hàng':
                                    object.shipping += 1
                                    return object.shipping
                                case 'Hoàn thành':
                                    object.done += 1
                                    return object.done                        
                                default:
                                    break;
                            }
                        })
                        setOrderData(object)
                        setLoading(true)
                    }
                    
                })
        }
        fetchApi();
    },[])
    console.log(orderData)
    return(
        <>
        {isLoading ? (
            <>
                <Card title='Thống kê đơn hàng' size='small' hoverable headStyle={{ backgroundColor: '#3CB815', color: 'white' ,  fontSize: 19}}>
                    <h6>
                        Tổng số đơn hàng : {orderData.total}
                    </h6>
                    <div>
                    <Badge color="yellow" text={`Đang chờ : ${orderData.waiting}`} /> 
                    </div>
                    <div>
                    <Badge color="blue" text={`Đang giao hàng : ${orderData.shipping}`} />   
                    </div>
                    <div>
                    <Badge color="green" text={`Hoàn thành : ${orderData.done}`} />      
                    </div>
                </Card>
            </>
        ):(
            <Spin className="loading"  size="large"/>
        )}
        </>
    )
}
export default OrderStatistic