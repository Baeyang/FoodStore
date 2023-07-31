import OrderStatistic from "./OrderStatistic"
import ProductStatistic from "./ProductStatistic"
import { Row,Col } from "antd"
function Dashboard() {
    return(
        <>
         <h1>
         TRANG DASHBOARD
         </h1>
         <Row>
            <Col xl={11} lg={11} md={11} xs={24} sm={24} className="mt-20">
                <OrderStatistic></OrderStatistic>
            </Col>
            <Col xl={{span:11,offset:2}} lg={{span:11,offset:2}} md={{span:11,offset:2}} xs={24} sm={24} className="mt-20">
                <ProductStatistic></ProductStatistic>
            </Col>
         </Row>
        </>
    )
}

export default Dashboard