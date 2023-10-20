import { Rings } from 'react-loader-spinner';
import { Layout } from 'antd';

import { TitleComponent } from './Title';
const { Content } = Layout;

function Loader() {
  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Loading</TitleComponent>

      <main className="flexCenter contentWrapper">
        <Rings
          height="80"
          width="80"
          color="#1ea6bb5b"
          radius="6"
          visible={true}
          ariaLabel="rings-loading"
        />
      </main>
    </Content>
  );
}

export { Loader };
