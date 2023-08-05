import { useState,useEffect } from "react"
import {db, ref, equalTo,orderByChild,get,query} from '../../firebase'
import { Row} from "antd"
import ListRelatedProduct from "./ListRelatedProduct"
import {RightOutlined,LeftOutlined} from '@ant-design/icons'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';

function RelatedProduct(props){
    const {category,id} = props
    // const [current,setCurrent] = useState(0)
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

    // const prev = () =>{
    //     setCurrent((current)=>(current==0? relatedProduct.length-1 : current-1))
    // }
    // const next = () =>{
    //     setCurrent((current)=>(current==0? relatedProduct.length-1 : current-1))
    // }
    return(
    <>
       <h3>Sản phẩm cùng loại</h3>
       {relatedProduct && (
        <>
            <div className="RelatedProduct__list">
                <Row>
                <Swiper
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    576:{
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },

                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                    nextEl:".button-next-product",
                    prevEl:".button-prev-product"
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper">
                    {relatedProduct.map((item, index) => (
                        // <Col xs={12} sm={12} md={8} lg={6} xl={6} key={index}>
                            <SwiperSlide key={index}><ListRelatedProduct key={index} item = {item}></ListRelatedProduct></SwiperSlide>
                        // </Col>
                    ))}
                    <div className="button-prev-product"> <LeftOutlined /></div>
                    <div className="button-next-product"> <RightOutlined /></div>
                    
                </Swiper>
                </Row> 
                

            </div>

        </>
    )}
    </>
    )
}

export default RelatedProduct
