
import {Row,Col} from 'antd'
import { Container } from "@mui/material"
import ProductList from "../../components/ProductList"
import SearchForm from "../../components/SearchForm"
function Home(){


    return(
        <>
        {/* <Container sx={{paddingLeft:3, paddingRight:3}} > */}
        <div className="Home__layout">
            <Row>
            <Col span = {4} xl={4} lg={4} md={6} sm={24} xs={24}>
                <div className="Search-Form__layout">
                    <SearchForm/>
                </div>
            </Col>

            <Col span = {20} xl={20} lg={20} md={18} sm={24} xs={24}>
            <div className="Product-List__layout">
                <ProductList/>
            </div>
            </Col>
            </Row>
        </div>
        {/* </Container> */}
        
        </>
    )
}

export default Home