import { Row, Col } from 'antd'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <div className="Layout-default__footer">
                <div className="container">
                    <Row>
                        <Col xl={10} lg={10} md={12} sm={24} xs={24}>
                            <div className="footer__name"> VMO Foods</div>
                            <p className="footer__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis deleniti recusandae accusantium in quos sit fuga reprehenderit aliquam accusamus eveniet! Ipsam nisi pariatur corrupti repellendus provident quibusdam ea! Ipsam, saepe?
                            </p>
                        </Col>
                        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                            <div className="footer__link">
                                <div className="footer__name"> Links </div>
                                <ul>
                                    <li><a href="/">Trang chủ</a></li>
                                    <li><a href="/product">Sản phẩm</a></li>
                                    <li><a href='/cart'>Giỏ hàng</a></li>
                                    <li><a href='/'>Điều khoản</a></li>
                                    <li><a href="/checkout">Thanh toán</a></li>

                                </ul>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                            <div className="footer__social">
                                <div className="footer__name"> Social </div>
                                <ul>
                                    <li><a href=""><FontAwesomeIcon icon={faFacebook} /> Facebook </a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faFacebook} /> Youtube</a></li>
                                    <li><a href=''><FontAwesomeIcon icon={faTelegram} /> Telegram</a></li>
                                    <li><a href=''><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={12} sm={24} xs={24}>
                            <div className='footer__contact'>
                                <div className='footer__name'>Contact</div>
                                <div className='footer__text'>
                                    <ul>
                                        <li>
                                        <div className='contact__address'>
                                            <span>
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </span>
                                                Đội 2, Cấn Hạ, Cấn Hữu, Quốc Oai, Hà Nội
                                        </div>
                                        </li>
                                        <li>
                                        <div className='contact__phone'>
                                            <span><FontAwesomeIcon icon={faPhone} /></span> +84979010301
                                        </div>
                                        </li>
                                        <li>
                                        <div className='contact__email'>
                                            <span> <FontAwesomeIcon icon={faEnvelope} /></span> beayang1511@gmail.com
                                        </div>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </div>
        </>
    )
}

export default Footer