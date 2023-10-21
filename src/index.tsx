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
          colorPrimary: '#1ea5bb',
          colorBgContainer: '#0e5977',
          colorBgLayout: '#102032',
          borderRadius: 16,
          fontFamily: 'Play',
          fontSize: 16,
          colorBorder: '#102032',
          colorPrimaryHover: '#818cf880',
          colorText: '#ebfaf9',
        },
        components: {
          Select: {
            optionActiveBg: '#1ea6bb5b',
            optionSelectedBg: '#1ea5bb',
          },
        },
      }}
    >
      <SiderContextProvider>
        <App />
      </SiderContextProvider>
    </ConfigProvider>
  </React.StrictMode>
);
