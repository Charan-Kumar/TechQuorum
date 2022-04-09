import './App.css';
import Routes from './routes/Routes';
import { Layout, Typography, Row, Col } from 'antd';
import Sidebar from './components/Layout/Sidebar';

function App() {
  const { Header, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: '0 20px' }} >
          <Row gutter={[16, 24]}>
            <Col flex={1} className="gutter-row">
              <div className="logo">
                <Typography.Title level={3}>Tech Quorum</Typography.Title>
              </div>
            </Col>
            <Col flex={3} className="gutter-row">
            </Col>
            <Col flex={1} className="gutter-row" style={{ alignSelf: 'center', display: 'flex', justifyContent: 'flex-end'}}>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sidebar />
          <Content>
            <div>
              <Routes />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
