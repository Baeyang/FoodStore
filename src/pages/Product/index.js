import {Row,Col} from 'antd'
import ProductList from "../../components/ProductList"
import SearchForm from "../../components/SearchForm"
import Section from '../../components/Section'
function Product() {
    return (
        <>
        <Section title={'Tất cả sản phẩm'}></Section>
        <div className='Product-page__layout'>
            <div className='container'>
                <Row>
                    <Col span={4} xl={4} lg={4} md={6} sm={24} xs={24}>
                        <div className="Search-Form__layout">
                            <SearchForm />
                        </div>
                    </Col>

                    <Col span={20} xl={20} lg={20} md={18} sm={24} xs={24}>
                        <div className="Product-List__layout">
                            <ProductList />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default Product