import { Tooltip, Button, Modal, Row, Col ,Avatar,Rate ,} from "antd"
import { EyeOutlined } from "@ant-design/icons"
import { useState } from "react"
import { UserOutlined } from "@ant-design/icons"

function DetailProduct(props) {
    const { record } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const ratingList = Object.values(record.rating)
    console.log(record.id)
    console.log(ratingList)
    const totalRating = ratingList.reduce((sum, item) => {
        return sum + item.rate
    }, 0)
    const avgRating = totalRating / ratingList.length
    console.log(avgRating)

    const rateCounts = [0, 0, 0, 0, 0];
    for (let i = 0; i < ratingList.length; i++) {
        const rate = ratingList[i].rate;
        if (rate >= 1 && rate <= 5) {
            rateCounts[rate - 1]++; // Tăng số lần xuất hiện tương ứng với mỗi rate
        }
    }
    console.log(rateCounts)
    // //Tính rating trung bình
    // const listRating = record.rating || []
    // const totalRating = listRating ? listRating.reduce((total,item)=>{
    //     return total + item;
    // },0) : 0
    // const avgRating = listRating ? (totalRating/listRating.length) : 0
    // //Danh sách các rating
    // const listRatingbyPoint = {}
    // if(listRating){
    //     for (let item of listRating){
    //         listRatingbyPoint[item]= (listRatingbyPoint[item] || 0) + 1;
    //     }
    // }
    // console.log(listRating)
    // console.log(listRatingbyPoint)

    return (
        <>
            <Tooltip title='Xem ảnh'>
                <Button className="ml-5" icon={<EyeOutlined />} onClick={showModal}>
                </Button>
            </Tooltip>

            <Modal title='Thông tin:' width={1000} open={isModalOpen} onCancel={handleCancel} footer={null}>
            <Row>
                <Col span={12}>
                <div className="Manage-Product__title">
                    {record.title}
                </div>
                <div className="Manage-Product__image">
                    <img alt="thumbnail" src={record.thumbnail}></img>
                </div>
                </Col>
                <Col span={12}>
                <div className="Rating__List">
                    {ratingList.length > 0 ?(
                        <>
                            <div className="Rating__ListByStar">
                                <p>1 sao ({rateCounts[0]})</p>
                                <p>2 sao ({rateCounts[1]})</p>
                                <p>3 sao ({rateCounts[2]})</p>
                                <p>4 sao ({rateCounts[3]})</p>
                                <p>5 sao ({rateCounts[4]})</p>
                            </div>
                            {ratingList.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <div className="Rating__inner">
                                            <Avatar size={45} icon={<UserOutlined />}/>
                                            <div className="Rating__review">
                                                <div><Rate disabled defaultValue={item.rate}></Rate></div>
                                                <p>{item.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </>
                    ) : (
                        <>
                        <div className="Rating__inner-no">
                            <p>Sản phẩm này chưa có đánh giá</p>
                        </div>
                        </>
                    )}
                    </div>
                </Col>
            </Row>
                {/* <div className="Manage-Product__rating">
                <Rate disabled defaultValue= {avgRating} />
                <div className="Manage-Product__listRate">
                   <div>- Số đánh giá : {listRating.length}</div> 
                    <div> - Danh sách các đánh giá : 
                        {Object.entries(listRatingbyPoint).map(([key,value])=>{
                            return <div key={key}> + Lượt đánh giá {key} sao : {value}</div>
                        })}
                    </div>
                </div>
            </div> */}

            </Modal>

        </>
    )
}

export default DetailProduct