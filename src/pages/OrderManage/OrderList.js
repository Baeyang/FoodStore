import { useState,useEffect } from "react"
import {ref,db,get} from '../../firebase'
import { Table,Button,Tooltip, Tag,Spin } from "antd"
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
function OrderList(){
    const [order, setOrder] = useState([])
    const [isLoading,setLoading] = useState(false)
    useEffect(()=>{
        const fetchApi = async() => {
            get(ref(db,'order'))
                .then(snapshot=>{
                    var data = Object.values(snapshot.val())
                    setOrder(data.reverse())
                    setLoading(true)
                })
        }
        fetchApi();
    },[])
    console.log(order)

    let options = [
      {text:'Đang chờ', value:'Đang chờ'},
      {text:'Đang giao hàng', value:'Đang giao hàng'},
      {text:'Hoàn thành', value:'Hoàn thành'}               
    ]
    const columns = [
        {
          title :'Mã Đơn',
          dataIndex : 'id',
          key : 'id'
        },
        {
          title: 'Tên',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Địa chỉ',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            key: 'phone',
          },
        {
            title: "Ngày gửi",
            dataIndex: 'creatAt',
            key: "creatAt",
        },
        {
          title: 'Trạng thái bán',
          dataIndex: 'status',
          key: 'status',
          filters : options,
          onFilter: (value, record) => record.status.indexOf(value) === 0,
          sortDirections: ['descend'],
          render: (_, record) => (
              <>
                {record.status === 'Đang chờ' ? (
                  <Tag color="yellow">Đang chờ</Tag>
                ) : record.status === 'Đang giao hàng' ? (
                  <Tag color="blue">Đang giao hàng</Tag>
                ) : (<Tag color="green">{record.status}</Tag>)
                }
              </>
            ),
        },
        
        {
            title: "Hành động",
            key: "actions",
            render: (_, record) => (
              <>
                <Link to ={`/detail-order/${record.id}`}>
                  <Tooltip title="Xem chi tiết">
                    <Button icon={<EyeOutlined />} ></Button>
                  </Tooltip>
                </Link>

              </>
            ),
        }
      ];



    
    return(
        <>
        {isLoading ? (
          <Table dataSource={order} columns={columns} rowKey='id' />
          ):(
          <div>
            <Spin className="loading"  size="large"/>
          </div>)
        }
        </>
    )
}

export default OrderList