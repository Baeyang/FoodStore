import Product from "./Product"
import {Row,Col} from 'antd'
function ProductList({data}){
    console.log(data)
    return(
        <><Row>
           {data?.slice(0,4).map((item,index)=>(
            <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                <Product key={index} item={item}> </Product>
            </Col>

           ))
           }
           </Row>
        </>
    )
}
export default ProductList