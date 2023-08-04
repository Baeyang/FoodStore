
import {Row,Col} from 'antd'
import { faTruckFast,faBowlFood,faPerson,faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './home.css'
import HomeListProduct from '../../components/HomeListProduct';
function Home(){


    return(
        <>
        {/* <Container sx={{paddingLeft:3, paddingRight:3}} > */}
        <div className="Home__layout">
            <div className='Home__Section'>
                <div className='container'> 
                    <Row>
                    <Col xl={16} lg={18} md={18} sm={20}>
                    <div className='Section__sub-title'>
                        VMO Foods
                    </div>
                    <h2 className='Section__title'>
                        Dinh dưỡng & Ngon miệng 
                        <br>
                        </br>
                        Đa dạng món ăn
                    </h2>
                    <p className='Section__text'>
                        Các món ăn được tạo nên từ thực phẩm sạch, qua kiểm duyệt, dưới tay các đầu bếp dân gian hàng đầu của chúng tôi sẽ mang đến cho bạn trải nghiệm bữa ăn một cách trọn vẹn nhất
                    </p>
                    </Col>
                    </Row>
                </div>
            </div>
            <div className='Home__Section-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-24'>
                            <div className='Section-2__item'>
                                <span>
                                <FontAwesomeIcon icon={faBowlFood} />
                                </span>
                                <div>
                                <h6>
                                    Đồ ăn
                                    </h6>
                                    <p>Đa dạng và tươi ngon</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-24'>
                            <div className='Section-2__item'>
                                <span>
                                <FontAwesomeIcon icon={faTruckFast} />
                                </span>
                                <div>
                                <h6>
                                    Vận chuyển
                                    </h6>
                                    <p>Nhanh chóng, miễn phí</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-24'>
                            <div className='Section-2__item'>
                                <span>
                                <FontAwesomeIcon icon={faPerson} />
                                </span>
                                <div>
                                <h6>
                                    Phục vụ
                                    </h6>
                                    <p>Tận tình và chu đáo</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-24'>
                            <div className='Section-2__item'>
                                <span>
                                <FontAwesomeIcon icon={faChartLine} />
                                </span>
                                <div>
                                    <h6>
                                    Chất lượng
                                    </h6>
                                    <p>Sạch sẽ và tươi mới</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Home__Products'>
                <div className='container'>
                    <HomeListProduct></HomeListProduct>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home