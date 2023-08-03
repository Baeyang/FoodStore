import { useState } from "react"
import { useEffect } from "react"
import { db ,get, ref} from "../../firebase"
import ProductList from "./ProductList"
import { Spin } from "antd"

function NewProductList(){
    const [Product,setProduct] = useState([])
    const [isLoading,setLoading] = useState(false)
    useEffect(()=>{
        const fetchApi = async() => {
            get(ref(db,'products'))
                .then(snapshot=>{
                    var data = Object.values(snapshot.val())
                    setProduct(data.reverse())
                    setLoading(true)
                })
        }
        fetchApi();
    },[])
    const DrinkProduct = Product.filter((item)=>{
        return item.category === 'Đồ uống' && item.status === true
    })
    const RiceProduct = Product.filter((item)=>{
        return item.category === 'Cơm chả' && item.status === true
    })
    const RibRiceProduct = Product.filter((item)=>{
        return item.category === 'Cơm sườn' && item.status === true
    })
    const NoodleProduct = Product.filter((item)=>{
        return item.category === 'Bún' && item.status === true
    })
    console.log(DrinkProduct)
    console.log(RiceProduct)
    return(
        <>
        {isLoading ? 
            (<div className="Home__Product">
                <div className="Home__Product-item">
                    <h3 className="Product-item__title">Cơm sườn</h3>
                    <ProductList data = {RibRiceProduct}></ProductList>
                </div>
                <div className="Home__DrinkProduct-item">
                    <h3 className="Product-item__title">Cơm chả</h3>
                    <ProductList data = {RiceProduct}></ProductList>
                </div>
                <div className="Home__DrinkProduct-item">
                    <h3 className="Product-item__title">Bún</h3>
                    <ProductList data = {NoodleProduct}></ProductList>
                </div>
                <div className="Home__Product-item">
                    <h3 className="Product-item__title">Đồ uống</h3>
                    <ProductList data = {DrinkProduct}></ProductList>
                </div>
                

            </div>):(
                <Spin className="loading"  size="large"/>
            )
            }
        </>
    )
}

export default NewProductList