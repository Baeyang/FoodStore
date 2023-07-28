
// import { useEffect, useState } from "react"
// // // import { db ,get, ref,push,set,uploadBytes, getDownloadURL} from "../../firebase"
// // import {db,ref,push,set} from '../../firebase'
// import { Form,Upload,Button,message} from 'antd';
// // import {v4} from "uuid"
// import { UploadOutlined } from '@ant-design/icons';
// import { getStorage,uploadBytes,ref,getDownloadURL} from "firebase/storage";
// import React from 'react';
// // 'file' comes from the Blob or File API
// import { Select, Space } from 'antd';
// //lưu vào storage và lấy ra url 
function Post() {
  return(
    <></>
    // <Form  layout="vertical" > 
    // <Form.Item initialValue={value}>
    //   <Select
    //     style={{ width: 120 }}
    //     options={[
    //       { value: 'jack', label: 'Jack' },
    //       { value: 'lucy', label: 'Lucy' },
    //       { value: 'Yiminghe', label: 'yiminghe' },
    //       { value: 'disabled', label: 'Disabled', disabled: true },
    //     ]}
    //   />
    //   </Form.Item>
    // </Form>
  );
  }
  export default Post;

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
