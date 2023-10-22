import { Layout } from 'antd';

import { VideoBackground } from '../components/VideoBackground';
import { HomeOverlay } from '../components/HomeOverlay';
const { Content } = Layout;

function HomePage() {
  return (
    <Content className="homeWrapper">
      <HomeOverlay />
      <VideoBackground />
    </Content>
  );
}

export default HomePage;
