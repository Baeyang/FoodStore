import { Button,Tooltip,Modal,Row,Col,Form,Input,Switch,InputNumber } from "antd"
import { EditOutlined } from "@ant-design/icons"
import { useState } from "react";
import {ref,db,update} from '../../firebase'
import { rules } from "../../rules";
import { getStorage,uploadBytes,getDownloadURL,ref as storageRef} from "firebase/storage";

function EditProduct(props){
    const storage = getStorage()
    const {record,onReload} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm()
    const [imageUpload, setImageUpload] = useState(null);
    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const onFinish = async (values) => {
        //case có ảnh thì thay ảnh mới 
        if (imageUpload) {
          const imageRef = storageRef(storage, `images/${imageUpload.name}`);
          const snapshot = await uploadBytes(imageRef, imageUpload);
          const imageURL = await getDownloadURL(snapshot.ref);
          await update(ref(db, `products/${record.id}`), {
            title: values.title,
            price: values.price,
            description: values.description,
            status: values.status,
            category: values.category,
            thumbnail: imageURL,
          });
        }  //case không có ảnh mới thì giữ nguyên   
        else if (!values.image) {
          await update(ref(db, `products/${record.id}`), {
            title: values.title,
            price: values.price,
            description: values.description,
            status: values.status,
            category: values.category,
          });
        }
        setIsModalOpen(false);
        onReload();
      };

    // const onFinish = (values) => {
    //     const fetchUpdate = async() => {
    //         if (imageUpload==null) return;
    //         const imageRef =  storageRef(storage,`images/${imageUpload.name}`)
    //         const snapshot = await uploadBytes(imageRef, imageUpload)
    //         const imageURL = await getDownloadURL(snapshot.ref)
    //         await update(ref(db,`products/${record.id}`),{
    //             title : values.title,
    //             price : values.price,
    //             description : values.description,
    //             status : values.status,
    //             category : values.category,
    //             thumbnail : imageUpload ? imageURL : record.thumbnail
    //         })
    //         .then(()=>{
    //             setIsModalOpen(false)
    //             onReload()
    //         })
    //     }
    //     fetchUpdate();
    // }
    return(
        <>
        <Tooltip title="Chỉnh sửa">
            <Button  className="ml-5" icon={<EditOutlined />}
                    onClick={showModal}
            >
            </Button>
        </Tooltip>

        <Modal width={1000} title='Chỉnh sửa' open={isModalOpen} onCancel={handleCancel} footer={null}>
            <Form   form={form}
                    layout="vertical" 
                    onFinish={onFinish} 
                    initialValues={record}
                    >
                <Row>
                    <Col span ={24}>
                        <Form.Item label = 'Tên' name = 'title' rules={rules}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col span ={24}>
                        <Form.Item label = 'Loại sản phẩm' name = 'category' rules={rules}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col span ={24}>
                        <Form.Item label = 'Giá' name = 'price' rules={rules} >
                            <InputNumber  
                                min={1} 
                                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}>
                            </InputNumber>
                        </Form.Item>
                    </Col>
                    <Col span ={24}>
                        <Form.Item label = 'Mô tả' name = 'description'>
                            <Input.TextArea rows={6}></Input.TextArea>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item label="Ảnh" name="image" initialValue={""}> 
                        <input type="file" name="image" onChange={
                        (event)=>{setImageUpload(event.target.files[0])}
                        } />
                        </Form.Item>
                    </Col>

                    <Col span ={24}>
                        <Form.Item name="status" label="Trạng thái" valuePropName="checked">
                            <Switch checkedChildren="Bật" unCheckedChildren="Tắt" />
                        </Form.Item>
                    </Col>
                    

                    <Col span={24}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Col>

                </Row>

            </Form>
        </Modal>
        </>
    )
}

export default EditProduct