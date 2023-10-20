import { useContext } from 'react';
import { Button, Layout, theme } from 'antd';

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
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <WarshipsLogo
        style={{
          maxWidth: '3.5rem',
          marginLeft: '1rem',
          color: colorPrimary,
          cursor: 'pointer',
        }}
        className="ant-menu-item"
        onClick={goHome}
      />

      <TitleComponent level={4}>Lesta Games</TitleComponent>

      <Button
        type="text"
        icon={collapsed ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        onClick={switchCollapse}
        style={{
          fontSize: '1rem',
          width: 64,
          height: 64,
          justifySelf: 'end',
        }}
      />
    </Header>
  );
}

export { HeaderComponent };
