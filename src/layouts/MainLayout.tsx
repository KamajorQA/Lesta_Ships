import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { SiderComponent } from '../components/SiderComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { Loader } from '../components/Loader';

function MainLayout() {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <>
        <Layout>
          <HeaderComponent />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Layout>

        <SiderComponent />
      </>
    </Layout>
  );
}

export { MainLayout };
