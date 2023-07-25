import { useState,useEffect } from "react"
import {ref,db,get} from '../../firebase'
import {Table,Tag } from "antd";
import EditProduct from "./EditProduct";
function ProductList(){
    const [product, setProduct] = useState([])
    const fetchApi = async() => {
        get(ref(db,'products'))
            .then(snapshot=>{
                var data = Object.values(snapshot.val())
                setProduct(data.reverse())
            })
    }
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
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
          },
        {
            title: 'Trạng thái',
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
              </>
            ),
        }
      ];
   


    return(
        <>
        <Table dataSource={product} columns={columns} rowKey='id' > </Table>
        </>
    )
}

export default ProductList