import { useState,useEffect } from "react"
import {ref,db,get} from '../../firebase'
import {Table,Tag,Spin } from "antd";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import AddProduct from "./AddProduct";
import DetailProduct from "./DetailProduct";

function ProductList(){
    const [product, setProduct] = useState([])
    const [isLoading,setLoading] = useState(false)
    const fetchApi = async() => {
        get(ref(db,'products'))
            .then(snapshot=>{
                var data = Object.values(snapshot.val())
                setProduct(data.reverse())
                setLoading(true)
            })
    }
      // lấy ra các category option
    const categories = [...new Set(product.map((item)=>{
      return item.category
    }))]
    console.log(categories)
      // tạo mảng key value là tên category để filter bằng api table antd
    let options = []
    if(categories){
      options = categories.map((item)=>{
        return {text: item , value: item}
      })
    }
    console.log(options)


    useEffect(()=>{
        fetchApi();
    },[])

    const handleReload = () =>{
        fetchApi();
    }

    const columns = [
        {
          title: 'Tên',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Loại sản phẩm',
          dataIndex: 'category',
          key: 'category',
          filters : options,
          onFilter: (value, record) => record.category.indexOf(value) === 0,
          sortDirections: ['descend'],
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
          },
        {
            title: 'Trạng thái bán',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => (
                <>
                  {record.status ? (
                    <Tag color="green">Đang bật</Tag>
                  ) : (
                    <Tag color="red">Đang tắt</Tag>
                  )}
                </>
              ),
        },
        {
            title: "Hành động",
            key: "actions",
            render: (_, record) => (
              <>
                  <EditProduct record={record} onReload={handleReload}></EditProduct>
                  <DeleteProduct record={record} onReload={handleReload}></DeleteProduct>
                  <DetailProduct record={record} onReload={handleReload}></DetailProduct>
              </>
            ),
        }
      ];
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
   


    return(
        <>
        {isLoading ? 
        (
          <>
            <div className="mb-20">
              <AddProduct onReload={handleReload}/>
            </div>
            <Table dataSource={product} columns={columns} rowKey='id'  onChange={onChange}> </Table>
          </>) : (
          <>
            <div>
                <Spin className="loading"  size="large"/>
            </div>
          </>)}
        </>
    )
}

export default ProductList