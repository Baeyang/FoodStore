import { Button,Modal,Form,Col,Row,Input,Switch,message } from "antd"
import { useState } from "react";
import {db,ref,push,set} from '../../firebase'
import { rules } from "../../rules";
function AddProduct(props){
    const {onReload} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm()
    const [mess, contextHolder] = message.useMessage();
    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const onFinish = async(values) => {
            const productsRef = ref(db, 'products');
            const newProductRef = push(productsRef);
            const newProductID = newProductRef.key
            await set(newProductRef, {
                id: newProductID,
                title: values.title,
                category: values.category,
                price: values.price,
                thumbnail: '' ,
                description : values.description,
                status : true,
            })
                .then(()=>{
                    
                    mess.open({
                        type: "success",
                        content: "Tạo mới thành công!",
                        duration: 5,
                    });
                    setIsModalOpen(false)
                    onReload()
                    })
                .catch((error) => {
                    
                    console.error(error);
                    mess.open({
                        type: "error",
                        content: "Tạo mới không thành công!",
                        duration: 3,
                      });
                    })
                    setIsModalOpen(false)
                    onReload()
                };

    return(
        <>
            {contextHolder}
            <Button onClick={showModal}>
                Thêm sản phẩm mới
            </Button>
            <Modal width={1000} title='Thêm sản phẩm' open={isModalOpen} onCancel={handleCancel} footer={null}>
            <Form   form={form}
                    layout="vertical" 
                    onFinish={onFinish} 
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
                        <Form.Item label = 'Giá' name = 'price' rules={rules}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col span ={24}>
                        <Form.Item label = 'Mô tả' name = 'description' initialValue={""}>
                            <Input.TextArea rows={6}></Input.TextArea>
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Thêm mới
                            </Button>
                        </Form.Item>
                    </Col>

                </Row>

            </Form>
        </Modal>
        </>
    )
}

export default AddProduct