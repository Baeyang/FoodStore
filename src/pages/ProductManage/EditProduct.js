import { Button,Tooltip,Modal,Row,Col,Form,Input,Switch } from "antd"
import { EditOutlined } from "@ant-design/icons"
import { useState } from "react";
import {ref,db,update} from '../../firebase'

function EditProduct(props){
    const {record,onReload} = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm()
    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const onFinish = (values) => {
        const fetchUpdate = async() => {
            await update(ref(db,`products/${record.id}`),{
                title : values.title,
                price : values.price,
                description : values.description,
                status : values.status,
                category : values.category
            })
            .then(()=>{
                setIsModalOpen(false)
                onReload()
            })
        }
        fetchUpdate();
    }
    return(
        <>
        <Tooltip title="Chỉnh sửa">
            <Button icon={<EditOutlined />}
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
                        <Form.Item label = 'Tên' name = 'title'>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col span ={24}>
                        <Form.Item label = 'Loại sản phẩm' name = 'category'>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col span ={24}>
                        <Form.Item label = 'Giá' name = 'price'>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col span ={24}>
                        <Form.Item label = 'Mô tả' name = 'description'>
                            <Input.TextArea rows={6}></Input.TextArea>
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