import './App.css';
import React from 'react'
import Routes from './routes/Routes';
import { Layout, Typography, Row, Col } from 'antd';
import Sidebar from './components/Layout/Sidebar';
import Navbar from './components/Layout/Navbar';
import { useNavigate, useLocation } from "react-router-dom";
import { useEthers } from '@usedapp/core'
import { login, getProfilesRequest } from '../src/components/Lens/Api'


function App() {
  const { Header, Content } = Layout;
  const {  account, activateBrowserWallet } = useEthers();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getAccessToken = async () => {
    if( account ){
      await login()
      navigate('/home')
    }
  }

  React.useEffect(async() => {
    // getAccessToken()
  }, [account]);

  return (
    <div className="App">
      
        <Layout>
          <Navbar />
          <Layout>
          { localStorage.getItem('access_token') &&  <Sidebar /> }
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
