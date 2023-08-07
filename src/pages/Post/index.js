import Section from "../../components/Section"
import about from '../../Layout/LayoutDefault/images/about1.png'
import about2 from '../../Layout/LayoutDefault/images/about2.png'
import mem from '../../Layout/LayoutDefault/images/mem.png'
import avt1 from '../../Layout/LayoutDefault/images/avt1.png'
import brand1 from '../../Layout/LayoutDefault/images/logo-1.png'
import brand2 from '../../Layout/LayoutDefault/images/brand-logo2.png'
import brand3 from '../../Layout/LayoutDefault/images/brand-logo3.png'
import brand4 from '../../Layout/LayoutDefault/images/brand-logo4.png'
import brand5 from '../../Layout/LayoutDefault/images/brand-logo5.png'
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Post() {
  return (
    <>
      <Section title={'Về chúng tôi'} />
      <div className="Post__about">
        <div className="container">
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12' >
              <div className='About__image'>
                <div className='About__image-1'>
                  <img src={about} alt='about-1'></img>
                </div>
                <div className='About__image-2'>
                  <img src={about2} alt='about-2'></img>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
              <div className='About__text'>
                <h5 className='About__sub-title'>
                  Vì sao lựa chọn VMO Foods
                </h5>
                <h2 className='About__title mb-20'>
                  VMO Foods Là sản phẩm của sự thành công về chất lượng và an toàn thực phẩm
                </h2>
                <p className='About__words mb-20'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, est repellendus are quia voluptate neque reiciendis ea placeat labore maiores cum, hic ducimus ad a dolorem soluta consectetur adipisci. Perspiciatis quas ab quibusdam is.
                </p>
                <p className='About__words mb-20'>
                  Itaque accusantium eveniet a laboriosam dolorem? Magni suscipit est corrupti explicabo non perspiciatis, excepturi ut asperiores assumenda rerum? Provident ab corrupti sequi, voluptates repudiandae eius odit aut.
                </p>
                <div className='About__name'>
                  <h5 className='About__name-sign' >
                    Minh NC
                  </h5>
                  <p className='About__name-duty'>
                    Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Post__members">
        <div className='container'>
          <h5 className='Members__sub-title '>
            Đội ngũ của chúng tôi
          </h5>
          <div className="row">
          <div className='Members__box col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='Members__item'>
              <img src={mem} alt='avatar'></img>
              <div className='Members__info'>
                <h6 className='Members__name'>
                  Nguyễn Chính Minh
                </h6>
                <span className='Members__duty '>
                  Manager
                </span>
                <div className='Members__contact'>
                  <ul>
                    <li><a href="/facebook"><FontAwesomeIcon icon={faFacebook} /> </a></li>
                    <li><a href='/facebook'><FontAwesomeIcon icon={faTelegram} /> </a></li>
                    <li><a href='/facebook'><FontAwesomeIcon icon={faTwitter} /> </a></li>
                    <li><a href="/facebook"><FontAwesomeIcon icon={faFacebook} /> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='Members__box col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='Members__item'>
              <img src={avt1} alt='avatar'></img>
              <div className='Members__info'>
                <h6 className='Members__name'>
                  Nguyễn Thị Thu Hương
                </h6>
                <span className='Members__duty'>
                  CEO-Founder
                </span>
                <div className='Members__contact'>
                  <ul>
                    <li><a href="/facebook"><FontAwesomeIcon icon={faFacebook} /> </a></li>
                    <li><a href='/facebook'><FontAwesomeIcon icon={faTelegram} /> </a></li>
                    <li><a href='/facebook'><FontAwesomeIcon icon={faTwitter} /> </a></li>
                    <li><a href="/facebook"><FontAwesomeIcon icon={faFacebook} /> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='Members__box col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='Members__item'>
              <img src={mem} alt='avatar'></img>
              <div className='Members__info'>
                <h6 className='Members__name'>
                  Nguyễn Chính Minh
                </h6>
                <span className='Members__duty'>
                  Manager
                </span>
                <div className='Members__contact'>
                  <ul>
                    <li><a href="/facebook"><FontAwesomeIcon icon={faFacebook} /> </a></li>
                    <li><a href='/facebook'><FontAwesomeIcon icon={faTelegram} /> </a></li>
                    <li><a href='/facebook'><FontAwesomeIcon icon={faTwitter} /> </a></li>
                    <li><a href="/facebook"><FontAwesomeIcon icon={faFacebook} /> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='Members__box col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='Members__item'>
              <img src={mem} alt='avatar'></img>
              <div className='Members__info'>
                <h6 className='Members__name'>
                  Nguyễn Chính Minh
                </h6>
                <span className='Members__duty'>
                  Manager
                </span>
                <div className='Members__contact'>
                  <ul>
                    <li><a href="/facebook"><FontAwesomeIcon icon={faFacebook} /> </a></li>
                    <li><a href='/facebook'><FontAwesomeIcon icon={faTelegram} /> </a></li>
                    <li><a href='/facebook'><FontAwesomeIcon icon={faTwitter} /> </a></li>
                    <li><a href="/facebook"><FontAwesomeIcon icon={faFacebook} /> </a></li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  

      <div className="About__logo">
        <div className="container">
          <div className="row">
            <div className="About__logo--inner">
              <div className="About__logo--items">
                <img src={brand1} alt="brandlogo">
                </img>
              </div>
              <div className="About__logo--items">
                <img src={brand2} alt="brandlogo">
                </img>
              </div>
              <div className="About__logo--items">
                <img src={brand3} alt="brandlogo">
                </img>
              </div>
              <div className="About__logo--items">
                <img src={brand4} alt="brandlogo">
                </img>
              </div>
              <div className="About__logo--items">
                <img src={brand5} alt="brandlogo">
                </img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Post;

