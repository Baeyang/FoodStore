import { useParams } from "react-router-dom"
import { db ,get, ref, update} from "../../firebase"
import { useState } from "react"
import { useEffect } from "react"
import './DetailProduct.css'
import { useDispatch, useSelector } from "react-redux"
import { addtoCart, updateCart } from "../../actions/cart";
import { Row,Col,Rate,Spin,Collapse } from "antd";
import RelatedProduct from "./RelatedProduct"


function DetailProduct(){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer)
    const [detailProduct,setdetailProduct] = useState([])
    const param = useParams()
    const [isLoading, setLoading] = useState(false)
    

    useEffect(()=>{
        const fetchApi = async() => {
            get(ref(db,`products/${param.id}`))
                .then(snapshot=>{
                    var data = snapshot.val()
                    setdetailProduct(data)
                    setLoading(true)
                })
        }
        fetchApi();
    },[param])
    
    const category = detailProduct.category
    const id = detailProduct.id
    //rating sản phẩm tgrung bình
    const listRating = detailProduct.rating || []
    const totalRating = listRating ? listRating.reduce((total,item)=>{
        return total + item;
    },0) : 0
    const avgRating = listRating ? (totalRating/listRating.length) : 0

    //danh sách rate
    let listRatingbyPoint = {}
    if(listRating){
        for (let item of listRating){
            listRatingbyPoint[item]= (listRatingbyPoint[item] || 0) + 1;
        }
    }
    const sortedListRatingbyPoint = Object.fromEntries(
        Object.entries(listRatingbyPoint).sort(([key1, value1], [key2, value2]) => key2 - key1)
      );
    //Thêm rate
    const onChange = async (e) => {
        await update(ref(db,`products/${param.id}`),{
            rating : [...detailProduct.rating,e]
        })
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
    console.log(detailProduct.rating)
    console.log(listRatingbyPoint)
    console.log(sortedListRatingbyPoint)


    return(<>
    {isLoading ? (
     <>
     <div className="mt-20 Detail-Product" >
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
                    <div className="DetailProduct__rate">
                        <Rate onChange={onChange} allowClear={false} defaultValue={avgRating}/>
                        <span className="ml-10">({listRating.length} đánh giá)</span>
                        {/* <div> - Danh sách các đánh giá : 
                        {Object.entries(sortedListRatingbyPoint).map(([key,value])=>{
                            return <div key={key}> + Lượt đánh giá {key} sao : {value}</div>
                        })}
                        </div> */}
                            <Collapse size='small' ghost
                            items={[{   key: '1', 
                                        label: 'Các lượt đánh giá', 
                                        children: <p>{
                                            Object.entries(sortedListRatingbyPoint).map(([key,value])=>{
                                                return <div key={key}> + Lượt đánh giá {key} sao : {value}</div>
                                        })}</p> 
                            }]}
                        />
                    </div>
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