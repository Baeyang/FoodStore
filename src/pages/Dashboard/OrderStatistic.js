import { useState,useEffect } from "react"
import {ref,db,get} from '../../firebase'
import { Card ,Spin} from "antd"
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
                <Card title='Thống kê đơn hàng' size='small'>
                    <div>
                        Tổng số đơn hàng : {orderData.total}
                    </div>
                    <div>
                        Đang chờ : {orderData.waiting}
                    </div>
                    <div>
                        Đang giao hàng : {orderData.shipping}
                    </div>
                    <div>
                        Hoàn thành : {orderData.done}
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