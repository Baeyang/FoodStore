import { useParams } from "react-router-dom"
import { db ,get, ref, update,child,push} from "../../firebase"
import { useState } from "react"
import { useEffect } from "react"
import './DetailProduct.css'
import { useDispatch, useSelector } from "react-redux"
import { addtoCart, updateCart } from "../../actions/cart";
import { Row,Col,Rate,Spin,Button ,Form,Input,Item,Avatar,notification} from "antd";
import { UserOutlined } from "@ant-design/icons"
import RelatedProduct from "./RelatedProduct"
import Section from "../../components/Section"
import { rules } from "../../rules"


function DetailProduct(){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer)
    const [detailProduct,setdetailProduct] = useState([])
    const param = useParams()
    const [isLoading, setLoading] = useState(false)
    const [ratingList,setRatingList] = useState([])
    const [tab,setTab] = useState('infoTab')
    const [noti, contextHolder] = notification.useNotification();
    

    const fetchRating = async() => {
        await get(ref(db, `products/${param.id}/rating`))
            .then(snapshot=>{
                var data =snapshot.val()
                const ratingArray = Object.values(data);
                setRatingList(ratingArray.reverse())
                console.log(ratingArray)
            })
    }

    const fetchApiProduct = async() => {
        get(ref(db,`products/${param.id}`))
            .then(snapshot=>{
                var data = snapshot.val()
                setdetailProduct(data)
                setLoading(true)
            })
    }

    useEffect(()=>{
        fetchRating();
    },[])
    
    useEffect(()=>{
        fetchApiProduct()
    },[])


    const category = detailProduct.category
    const id = detailProduct.id


    const totalRating = ratingList.reduce((sum,item)=>{
        return sum + item.rate
    },0)
    const avgRating = totalRating/ratingList.length
    console.log(avgRating)

    const rateCounts = [0, 0, 0, 0, 0]; 
    for (let i = 0; i < ratingList.length; i++) {
        const rate = ratingList[i].rate;
        if (rate >= 1 && rate <= 5) {
        rateCounts[rate - 1]++; // Tăng số lần xuất hiện tương ứng với mỗi rate
        }
    }
    console.log(rateCounts)

    const onSubmit = async (e) => {
        const ratingRef = child(ref(db,`products/${param.id}`), 'rating');
        try{
            await push(ratingRef, e);
            noti.success({
                duration: 1,
                message: `Gửi đánh giá thành công!`,
                style: {
                    marginTop: '8vh',
                  }
            });
            setTimeout(() => {
                window.location.reload(); // Reload trang web sau 1 giây
              }, 1000);
        }
        catch(error){
            console.log(error)
        }
    }   

    const handleAddToCart = () => {
        if(cart.some(itemcart => itemcart.id === detailProduct.id)){
            dispatch(updateCart(detailProduct.id))
        }
        else{
            dispatch(addtoCart(detailProduct.id,detailProduct))
        }
    }

    console.log(param)
    // console.log(listRatingbyPoint)
    // console.log(sortedListRatingbyPoint)


    return(<>
    {contextHolder}
    {isLoading ? (
     <>
     <Section title={'Chi tiết sản phẩm'}></Section>
     <div className="Detail-Product" >
        <div className="container">
        <Row>
            <Col xl ={10} lg={10} md={10} sm={24} xs={24}>
                <div className="DetailProduct__image"> 
                    <img src={detailProduct.thumbnail} alt='img'></img>
                </div>
            </Col>

            <Col xl={{span:12,offset:2}} lg={{span:12,offset:2}}  md={{span:13,offset:1}} sm={24} xs={24}>
                <div className="DetailProduct__info">
                    <div className="DetailProduct__title">{detailProduct.title}</div>
                    <Rate disabled allowHalf defaultValue={avgRating}></Rate>
                    <div className="DetailProduct__price">Giá: {detailProduct.price}</div>
                    <div className="DetailProduct__des">Mô tả: {detailProduct.description}</div>
                    <hr></hr>
                    <div className="button">
                        <button onClick={handleAddToCart}> Chọn Mua </button>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
            <div className="DetailProduct__Tab">
                <div className="Tab__content">
                    <ul>
                        <li className={`${tab === 'infoTab' ? 'active__tab' : ''}`} onClick={()=>setTab('infoTab')}><h5>Thông tin</h5></li>
                        <li className={`${tab === 'rateTab' ? 'active__tab' : ''}`} onClick={()=>setTab('rateTab')}><h5> Đánh giá ({ratingList.length})</h5></li>
                    </ul>
                </div>
                {tab === 'rateTab' ? (<div className="Rating__Form">
                <div className="Rating__List">
                    {ratingList.length > 0 ?(
                        <>
                            <div className="Rating__ListByStar">
                                <p>1 sao ({rateCounts[0]})</p>
                                <p>2 sao ({rateCounts[1]})</p>
                                <p>3 sao ({rateCounts[2]})</p>
                                <p>4 sao ({rateCounts[3]})</p>
                                <p>5 sao ({rateCounts[4]})</p>
                            </div>
                            {ratingList.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <div className="Rating__inner">
                                            <Avatar size={45} icon={<UserOutlined />}/>
                                            <div className="Rating__review">
                                                <div><Rate disabled defaultValue={item.rate}></Rate></div>
                                                <p>{item.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </>
                    ) : (
                        <>
                        <div className="Rating__inner">
                            <p>Sản phẩm này chưa có đánh giá</p>
                        </div>
                        </>
                    )}
                    </div>
                    <div className="Form__inner">
                    <h6> Thêm đánh giá </h6>
                    <Form onFinish={onSubmit}>
                        <Form.Item name='rate' initialValue={5}>
                        <Rate allowClear={false}/>
                        </Form.Item>
                        <Form.Item name='review' rules={rules}>
                            <Input.TextArea placeholder="Đánh giá của bạn..." cols={6} ></Input.TextArea>
                        </Form.Item>
                        <Form.Item >
                            <Button htmlType="submit">
                                Gửi
                            </Button>
                        </Form.Item>
                    </Form>
                    </div>
                </div>) : (
                    <>
                        <p>Món ăn là một phần quan trọng trong cuộc sống hàng ngày của chúng ta. Nó không chỉ đáp ứng nhu cầu dinh dưỡng mà còn mang lại niềm vui và trải nghiệm cho vị giác của chúng ta. Mỗi món ăn có thể mang trong mình một hương vị đặc trưng, kết hợp các thành phần chính và gia vị khác nhau để tạo ra một trải nghiệm ẩm thực độc đáo.
                        Món ăn không chỉ đơn thuần là cách để cung cấp năng lượng cho cơ thể, mà nó còn là một phần của văn hóa và truyền thống của mỗi quốc gia và khu vực. Mỗi món ăn có thể kể lên một câu chuyện về nguồn gốc, lịch sử và phong cách ẩm thực của một dân tộc.</p>
                    </>
                ) 
                }
                
                </div>
            </Col>
        </Row>
        <div className="Related__Product"></div>
        <Row>
            <Col span={24}>
                <RelatedProduct category={category} id={id}></RelatedProduct>
            </Col>
        </Row>
        </div>
        </div>
    </>
     ) 
     : (<Spin className="loading"  size="large"/>)
     }
    </>)
}

export default DetailProduct