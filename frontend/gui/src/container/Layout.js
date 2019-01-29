import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;

const CustomLayout = props => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
    </Layout>
  );
};

export default CustomLayout;
