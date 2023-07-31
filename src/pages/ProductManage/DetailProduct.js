import { Tooltip,Button,Modal,Rate } from "antd"
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
    //Tính rating trung bình
    const listRating = record.rating || []
    const totalRating = listRating ? listRating.reduce((total,item)=>{
        return total + item;
    },0) : 0
    const avgRating = listRating ? (totalRating/listRating.length) : 0
    //Danh sách các rating
    const listRatingbyPoint = {}
    if(listRating){
        for (let item of listRating){
            listRatingbyPoint[item]= (listRatingbyPoint[item] || 0) + 1;
        }
    }
    console.log(listRating)
    console.log(listRatingbyPoint)

    return(
        <>
        <Tooltip title='Xem ảnh'>
            <Button className="ml-5" icon={<EyeOutlined />} onClick={showModal}>
            </Button>
        </Tooltip>
        
        <Modal title='Thông tin:' width={500} open={isModalOpen} onCancel={handleCancel} footer={null}>

            <div className="Manage-Product__title"> 
                {record.title} 
            </div>

            <div className="Manage-Product__image">
                <img alt="thumbnail" src={record.thumbnail}></img>
            </div>
            <div className="Manage-Product__rating">
                <Rate disabled defaultValue= {avgRating} />
                <div className="Manage-Product__listRate">
                   <div>- Số đánh giá : {listRating.length}</div> 
                    <div> - Danh sách các đánh giá : 
                        {Object.entries(listRatingbyPoint).map(([key,value])=>{
                            return <div key={key}> + Lượt đánh giá {key} sao : {value}</div>
                        })}
                    </div>
                </div>
            </div>
            
        </Modal>
        
        </>
    )
}

export default DetailProduct