
import { useEffect, useState } from "react"
// // import { db ,get, ref,push,set,uploadBytes, getDownloadURL} from "../../firebase"
// import {db,ref,push,set} from '../../firebase'
import { Form,Upload,Button,message} from 'antd';
// import {v4} from "uuid"
import { UploadOutlined } from '@ant-design/icons';
import { getStorage,uploadBytes,ref,getDownloadURL} from "firebase/storage";
import React from 'react';
// 'file' comes from the Blob or File API

//lưu vào storage và lấy ra url 
function Post() {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
    const storage = getStorage()
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUploadURL, setImageUploadUrl] = useState(null);
    const uploadImage = () => {

        if (imageUpload==null) return;
        const imageRef =  ref(storage,`images/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then(data=>{
                console.log(data)
            })
            console.log('ok')
            })
        }
    
        const props={
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);

                setImageUpload(info.fileList[0].originFileObj)
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };


    return (
    <>
        Page Post

        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <button onClick={uploadImage}>Gửi</button>

       <input name="image" type="file" onChange={
            (event)=>{setImageUpload(event.target.files[0])}
        } />
        <button onClick={uploadImage}>Gửi</button>
    </>
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
