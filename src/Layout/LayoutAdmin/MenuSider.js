import { Menu } from "antd";
import {
  DashboardOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

function MenuSider() {
  const location = useLocation();
  const items = [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: <Link to="/admin">Tổng quan</Link>,
    },
    {
      key: "/order-manage",
      icon: <FileDoneOutlined />,
      label: <Link to="/order-manage">Quản lý Đơn hàng</Link>,
    },
    {
      key: "/product-manage",
      icon: <FileDoneOutlined />,
      label: <Link to="/product-manage">Quản lý sản phẩm</Link>,
    },
  ];

  return (
    <>
      <Menu
        items={items}
        mode="inline"
        defaultOpenKeys={["/dashboard"]}
        defaultSelectedKeys={[location.pathname]}
      />
    </>
  );
}

export default MenuSider;
