import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';

import { SiderContextProvider } from './context/SiderContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fadb14',
          colorBgContainer: '#f7e29a',
          colorBgLayout: '#f7ca2f',
          borderRadius: 16,
          fontFamily: 'Caveat',
          fontSize: 16,
          colorBorder: '#f7ca2f',
          colorPrimaryHover: '#818cf880',
        },
      }}
    >
      <SiderContextProvider>
        <App />
      </SiderContextProvider>
    </ConfigProvider>
  </React.StrictMode>
);
