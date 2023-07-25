// import { useRef } from "react"
import { useEffect, useState } from "react"
import { db ,get, ref,push,set} from "../../firebase"
// import { Pagination } from "@mui/material"
// import { useSelector } from "react-redux"
// import { Row, Col } from 'antd';
function Post(){
    //TEST THÊM MỚI SẢN PHẨM
    // const addProduct = async () => {
    //       const productsRef = ref(db, 'products');
    //    const newProductRef = push(productsRef);
    //    const newProductID = newProductRef.key
    //   await set(newProductRef, {
    //       id: newProductID,
    //       title: 'New Product',
    //       brand: 'Brand',
    //        category: 'Category',
    //        price: 99,
    //       thumbnail: 'https://i.dummyjson.com/data/products/31/thumbnail.jpg'
    //      });
    //    };
    // addProduct()    




    // const [productzzz,setProduct] = useState([])
    // useEffect(()=>{
    //     const fetchApi = async() => {
    //         get(ref(db,'products'))
    //             .then(snapshot=>{
    //                 var data = Object.values(snapshot.val())
    //                 setProduct(data)
    //             })
    //     }
    //     fetchApi();
    // },[])
    // console.log(productzzz) 
    
    // const productsArray = Object.values(productzzz);

    ////CHỨC NĂNG ORDER(TẠO MỚI ORDER)
    // const [orders,setProduct] = useState([])
    // useEffect(()=>{
    //     const fetchApi = async() => {
    //         get(ref(db,'order'))
    //             .then(snapshot=>{
    //                 var data = Object.values(snapshot.val())
    //                 setProduct(data)
    //             })
    //     }
    //     fetchApi();
    // },[])

    // console.log(orders)
    return(
        <>
            Page Post
        </>
    )
}

export default Post