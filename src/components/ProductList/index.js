import Product from "./Product"
import './ProductList.css'
import { useEffect, useState } from "react"
import { db ,get, ref} from "../../firebase"
import { Pagination } from "@mui/material"
import { useSelector } from "react-redux"
import { Row, Col } from 'antd';
function ProductList(){
    const [product,setProduct] = useState([])
    const [page,setPage]  = useState(1)
    useEffect(()=>{
        const fetchApi = async() => {
            get(ref(db,'products'))
                .then(snapshot=>{
                    var data = Object.values(snapshot.val())
                    setProduct(data)
                })
        }
        fetchApi();
    },[])
    //Lấy ra các sản phẩm được bật (có bán)
    const onProduct = product.filter((item)=>{
        return item.status === true
    })


    //Lọc theo tên input vào
    const name = useSelector(state => state.nameReducer)
    const filterName = onProduct.filter((item)=>{
        return item.title.toLowerCase().includes(name)
    })

    //Lọc theo loại category
    const categoryOption = useSelector(state=>state.filterReducer)
    const filterCategory = categoryOption === 'all' ? filterName : filterName.filter((item)=>
        item.category === categoryOption
    )
    
    //Sắp xếp theo giá
    const filterProduct = [...filterCategory] //lấy data từ phần lọc trước 
    console.log(filterProduct)
    const PriceOption = useSelector(state=>state.priceReducer)
    const filterPrice = (PriceOption) => {
         if (PriceOption === 'Low-High') {
             filterProduct.sort((a, b) => a.price - b.price);
        } else if (PriceOption === 'High-Low') {
            filterProduct.sort((a, b) => b.price - a.price);
        }
           return filterProduct;
    }
    filterPrice(PriceOption)


    // set lại giá trị của page về 1 khi categoryOption thay đổi
    
    const pageCount = Math.ceil(filterProduct.length/ 8)  // 8 sp mỗi trang
    const handleChange = (event, value) => {
        setPage(value);
      };
      useEffect(() => {
        setPage(1); 
      }, [categoryOption]);
    return(
        <div>
        {filterProduct.length > 0 ?
        (
            <>
        <div className="Product__list">

            <Row gutter={[16, 16]}>
            {filterProduct.slice(page*8-8 , page*8).map((item, index) => (
                <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                    <Product  key={index} item={item} /> 
                </Col>
            ))}
            </Row> 
        </div>
        <div className="Product__pagination">
            <Pagination page={page} count={pageCount} onChange={handleChange}/>
        </div>
            </>
        )
        :(
            <>
            <Row>
            <div className="Product__list">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <p> Không tìm thấy sản phẩm nào.</p>
                </Col>
            </div>
            </Row>
           
           
            </>
        )
        
        }
            
        </div>
    )
}

export default ProductList