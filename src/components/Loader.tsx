import { ThreeCircles } from 'react-loader-spinner';
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
        <ThreeCircles
          height="100"
          width="100"
          color="#fadb14"
          visible={true}
          ariaLabel="three-circles-rotating"
          innerCircleColor="rgba(0, 147, 255, 0.35)"
          middleCircleColor="#f7ca2f"
        />
      </main>
    </Content>
  );
}

export { Loader };
