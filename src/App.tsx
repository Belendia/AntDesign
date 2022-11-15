import React from "react";
import { Layout } from "antd";
import AppHeader from "./components/common/header";
import "./App.css";

const { Header, Content } = Layout;

import "antd/dist/antd.css";
import AppHome from "./views/home";

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
