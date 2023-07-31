import { useState,useEffect } from "react"
import {db, ref, equalTo,orderByChild,get,query} from '../../firebase'
import { Row,Col} from "antd"
import ListRelatedProduct from "./ListRelatedProduct"
function RelatedProduct(props){
    const {category,id} = props
    const [relatedProduct,setRelatedProduct] = useState([])
    useEffect(()=>{
        const fetchApi = async() => {
            const productsRef = query(
                ref(db, 'products'),
                orderByChild('category'),
                equalTo(category)
            );
            const snapshot = await get(productsRef);
            const res = Object.values(snapshot.val());

            //loại bỏ phần tử đang hiển thị
            const product = res.filter(item=>{
                return item.status === true && item.id !== id
            })
            setRelatedProduct(product)
        }
        fetchApi();
    }, [id]);
    console.log(relatedProduct)

    return(
    <>
       <h2>Sản phẩm cùng loại</h2>
       {relatedProduct && (
        <>
            <div className="RelatedProduct__list">
                <Row gutter={[16, 16]}>
                {relatedProduct.slice(0,3).map((item, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                        <ListRelatedProduct key={index} item = {item}></ListRelatedProduct>
                    </Col>
                ))}
                </Row> 
            </div>

        </>
    )}
    </>
    )
}

export default RelatedProduct
