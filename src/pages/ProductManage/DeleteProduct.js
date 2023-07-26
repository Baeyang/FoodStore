import { Button,Tooltip,Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import {ref,db,remove} from '../../firebase'
function DeleteProduct(props) {
    const {record,onReload} = props
    const handleDelete = () => {
            const fetchDelete = async() => {
                await remove(ref(db, `products/${record.id}`))
                .then(()=>{
                    onReload()
                })
            }
            fetchDelete();
    }

    return (
        <>
            <Tooltip title="Xóa sản phẩm">
                <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={handleDelete}>
                    <Button
                        className="ml-5"
                        danger
                        ghost
                        icon={<DeleteOutlined />}
                    ></Button>
                </Popconfirm>
            </Tooltip>
        </>
    )
}

export default DeleteProduct