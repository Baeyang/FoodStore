import { Outlet } from "react-router-dom"
import './LayoutAdmin.css'
import {Button, Layout} from 'antd';
import { getCookie } from "../../helper/Cookie";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuSider from "./MenuSider";
import { LogoutOutlined,UserOutlined,MenuUnfoldOutlined,MenuFoldOutlined } from '@ant-design/icons';
const { Sider, Content } = Layout;
function LayoutAdmin() {
    const token = getCookie('token')
    const isLogin = useSelector(state => state.loginReducer)
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
        <Layout>
            <div className="Layout-Admin__header">
                    <div className="Layout-Admin__wrap">
                        <div
                            className={
                            "Layout-Admin__logo " + (collapsed && "Layout-Admin__logo--fold")
                            }
                        >
                            <Link to="/admin">{collapsed ? "ADMIN" : "Trang chủ Admin"}</Link>
                        </div>

                        <div className="Layout-Admin__nav">
                            <div
                                className="Layout-Admin__icon-collapse"
                                onClick={() => setCollapsed(!collapsed)}
                                >
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </div>
                            <div>
                                <Link to='logout'>
                                <Button icon={<LogoutOutlined />}>
                                    Đăng xuất
                                </Button>
                            </Link>
                            </div>
                        </div>
                        
                    </div>
            </div>
            <Layout className="Layout-Admin__main">
                <Sider
                    breakpoint="lg"
                    className="Layout-Admin__sider"
                    theme="light"
                    collapsed={collapsed}
                    width={230}
                    onBreakpoint={(e) => setCollapsed(e)}
                >
                    <MenuSider />
                </Sider>
                <Content className="Layout-Admin__content" >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
        </>
    )
}

export default LayoutAdmin