import { Card,Spin } from "antd"
import { useState,useEffect } from "react"
import {ref,db,get} from '../../firebase'
function ProductStatistic(){
    const [productData,setProductData] = useState([])
    const [isLoading,setLoading] = useState(false)
    useEffect(()=>{ 
        const fetchApi = async() => {
            get(ref(db,'products'))
                .then(snapshot=>{
                    var data = Object.values(snapshot.val())
                    let object = {
                        total : 0,
                        statusOn :0,
                        statusOff: 0
                    }
    
                    object.total = data.length
                    data.forEach(item=>{
                        switch (item.status) {
                            case true:
                                object.statusOn += 1
                                return object.statusOn
                            case false:
                                object.statusOff += 1
                                return object.statusOff
                            default:
                                break;
                        }
                    })
                    setProductData(object)
                    setLoading(true)
                })
        }
        fetchApi();
    },[])

    return(
    <>
    {isLoading ?(
        <Card title='Thống kê sản phẩm' size='small'>
            <div>Tổng số sản phẩm : {productData.total}</div>
            <div>Đang bật : {productData.statusOn}</div>
            <div>Đang tắt : {productData.statusOff}</div>
        </Card>) : (
            <>
                <Spin className="loading"  size="large"/>
            </>
        )
    }
    </>)
}

export default ProductStatistic