import { Layout } from "antd";
import AppHeader from "./components/common/header";
import AppFooter from "./components/common/footer";
import "./App.css";

const { Header, Footer, Content } = Layout;

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
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
