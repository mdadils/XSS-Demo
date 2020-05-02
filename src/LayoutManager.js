import React from "react";
import { Layout, Breadcrumb, Icon } from "antd";
import { Divider } from "antd";

import LoginForm from "./LoginForm";

import CardList from "./components/CardList";

const { Header, Content, Footer, Sider } = Layout;

class LayoutManager extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          //   collapsible
          width="300px"
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <LoginForm />
          <Divider />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <CardList />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutManager;
