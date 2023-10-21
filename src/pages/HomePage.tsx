import { Layout } from 'antd';

import { VideoBackground } from '../components/VideoBackground';
const { Content } = Layout;

function HomePage() {
  return (
    <Content className="homeWrapper">
      <div className="filter"></div>
      <VideoBackground />
    </Content>
  );
}

export default HomePage;
