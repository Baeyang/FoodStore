import { Tooltip,Button,Image,Modal } from "antd"
import { EyeOutlined } from "@ant-design/icons"
import { useState } from "react"

function DetailProduct(props){
    const {record} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
  
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return(
        <>
        <Tooltip title='Xem ảnh'>
            <Button className="ml-5" icon={<EyeOutlined />} onClick={showModal}>
            </Button>
        </Tooltip>
        
        <Modal title='Hình ảnh món ăn' width={500} open={isModalOpen} onCancel={handleCancel} footer={null}>

            <div className="Manage-Product__title"> 
                {record.title} 
            </div>

            <div className="Manage-Product__image">
                <img src={record.thumbnail}></img>
            </div>
        </Modal>
        
        </>
    )
}

export default DetailProduct