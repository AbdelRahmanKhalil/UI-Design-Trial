import React from "react";
import "antd/dist/antd.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
        {/* <div className="logo" /> */}
        
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
            {/* {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })} */}
            {/* <Link to='/'> */}
            <Menu.Item ><Avatar size={40} icon={<UserOutlined />} ></Avatar></Menu.Item>
            <Menu.Item key={0}>{<Link to="/UI-Design-Trial/">Home</Link>}</Menu.Item>
            <Menu.Item key={1}>
              {<Link to="/UI-Design-Trial/ProgressPage">Progress</Link>}
            </Menu.Item>
            {/* </Link> */}
          </Menu>
        </Header>

        <Layout className="site-layout">
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            {this.props.children}

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Navbar;
