import { rules } from "../../rules"
import { Col, Form, Row, Card, Input, Button, notification } from 'antd'
import { getCookie } from "../../helper/Cookie";
import './checkout.css'
import { deleteCookie } from "../../helper/Cookie";
import { db, ref, set, push } from "../../firebase"
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../actions/cart";
import { getTimeCurrent } from "../../helper/getTime";
import axios from 'axios';

const { TextArea } = Input;


function Checkout() {

    const dispatch = useDispatch()
    const cartRedux = useSelector(state => state.cartReducer)
    const [form] = Form.useForm();
    const [noti, contextHolder] = notification.useNotification();

    const data = getCookie('cart')
    const cart = data ? JSON.parse(data) : []

    const total = cart.reduce((sum, item) => {
        return sum + item.info.price * item.quantity
    }, 0)

    //twilio account
    const url = 'https://api.twilio.com/2010-04-01/Accounts/AC37c663c8e7b621251c006fe1e86dec42/Messages.json'
    const auth = {
        username: 'AC37c663c8e7b621251c006fe1e86dec42',
        password: 'e591b12786e2eea2b7cc2f20f1568445'
    };

    const handleFinish = async (values) => {
        const orderRef = ref(db, 'order');
        const newOrderRef = push(orderRef);
        const newOrderID = newOrderRef.key
        values.ordered = cart
        values.totalPrice = total
        values.creatAt = getTimeCurrent()
        values.id = newOrderID
        values.status = 'Đang chờ'
        values.phone = values.phone.replace('0', '+84')

        await set(newOrderRef, values)
            .then(() => {
                form.resetFields();
                noti.success({
                    message: `Gửi yêu cầu thành công!`,
                    description: "Cảm ơn bạn đã đặt hàng!",
                    style: {
                        marginTop: '10vh',
                    }
                });
                deleteCookie('cart');
                dispatch(deleteCart());
            })
            .catch((error) => {
                console.error(error);
                noti.error({
                    message: `Gửi yêu cầu không thành công!`,
                    description: "Hệ thống đang gặp lỗi, vui lòng gửi lại yêu cầu.",
                    style: {
                        marginTop: '10vh',
                    }
                });
            });
        const data = new URLSearchParams()
        data.append('To', values.phone)
        data.append('From', '+14705704514')
        data.append('Body', `Đơn hàng của bạn: ${newOrderID} - ${values.status}`)
        try {
            const response = await axios.post(url, data, { auth })
            console.log(response.data)
        }
        catch (error) {
            console.error(error)
        }

    }



    return (
        <>
            {contextHolder}
            <div className="Checkout-page">
                <div className="container">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Card title="Thông tin chi tiết" id="infoForm">
                                <Form name="info-form" form={form} layout="vertical" onFinish={handleFinish}>
                                    <Row gutter={20}>
                                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                            <Form.Item label="Họ và tên" name='name' rules={rules}>
                                                <Input
                                                    placeholder="Vui lòng nhập tên của bạn"></Input>
                                            </Form.Item>
                                        </Col>
                                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                            <Form.Item label="Số điện thoại" name='phone' rules={rules}>
                                                <Input
                                                    pattern="[0-9]*"
                                                    maxLength={10}
                                                    minLength={10}
                                                    placeholder="Vui lòng nhập số điện thoại"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                            <Form.Item label="Địa chỉ" name='address' rules={rules}>
                                                <Input placeholder="Vui lòng nhập địa chỉ của bạn"></Input>
                                            </Form.Item>
                                        </Col>
                                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                            <Form.Item label="Lời nhắn" name='note' initialValue={""}>
                                                <Input rows={6} placeholder="Vui lòng nhập lời nhắn (nếu có)"></Input>
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            {cart.length > 0 ?
                                                (
                                                    <Button type="primary" htmlType="submit">
                                                        Gửi đơn đặt hàng
                                                    </Button>
                                                )
                                                :
                                                (<Button type="primary" htmlType="submit" disabled>
                                                    Gửi đơn đặt hàng
                                                </Button>
                                                )
                                            }
                                        </Col>
                                    </Row>

                                </Form>
                            </Card>
                        </Col>

                        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Card title="Sản phẩm thanh toán" id="orderInfo">
                                <table className="Checkout__table">
                                    <thead>
                                        <tr>
                                            <th>
                                                Sản phẩm
                                            </th>
                                            <th>
                                                Tổng tiền
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.length > 0 && cart.map((item, index) =>
                                        (
                                            <tr key={item.info.id} className="cart__item-checkout">
                                                <td>
                                                    <span>{item.info.title}</span> <strong className="cart__item-quantity">x {item.quantity}</strong>
                                                </td>
                                                <td>
                                                    <p className="cart__item-totalprice">{parseInt(item.info.price) * parseInt(item.quantity)}</p>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td>

                                            </td>
                                            <td>
                                                <strong className="cart__items-totalprice"> {total}</strong>
                                            </td>
                                        </tr>
                                    </tbody>


                                </table>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        </>
    )
}
export default Checkout	