import { useContext } from 'react';
import { Button, Layout, theme } from 'antd';
import { motion } from 'framer-motion';

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';

import { ReactComponent as WarshipsLogo } from '../assets/icons/World of Warships.svg';
import { SiderContext } from '../context/SiderContext';
import { useControlNavigation } from '../hooks/useControlNavigation';

import { TitleComponent } from './Title';

const { Header } = Layout;

function HeaderComponent() {
  const {
    token: { colorPrimary, colorBgLayout },
  } = theme.useToken();

  const { goHome } = useControlNavigation();

  const { collapsed, switchCollapse } = useContext(SiderContext);

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgLayout,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <motion.div
        className="flexCenter"
        style={{
          position: 'absolute',
          left: 0,
          width: '3.5rem',
          marginLeft: '1rem',
        }}
        initial={{
          y: -200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          type: 'spring',
          ease: 'easeInOut',
        }}
      >
        <WarshipsLogo
          style={{
            maxWidth: '3.5rem',
            color: colorPrimary,
          }}
          className="ant-menu-item target"
          onClick={goHome}
        />
      </motion.div>

      <TitleComponent level={4}>Lesta Games</TitleComponent>

      <motion.div
        className="flexCenter"
        style={{
          position: 'absolute',
          right: '0',
        }}
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 2,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          onClick={switchCollapse}
          style={{
            fontSize: '1rem',
            width: 64,
            height: 64,
          }}
        />
      </motion.div>
    </Header>
  );
}

export { HeaderComponent };
