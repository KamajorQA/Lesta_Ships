import { Menu } from 'antd';
import { BiSolidShip } from 'react-icons/bi';
import { LiaMailBulkSolid } from 'react-icons/lia';

import { ReactComponent as WarshipsEmblem } from '../assets/icons/WarshipsEmblem.svg';

import { useControlNavigation } from '../hooks/useControlNavigation';

function MenuComponent() {
  const { highlightActiveLink, goToChosenPage } = useControlNavigation();

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['/']}
      selectedKeys={highlightActiveLink()}
      items={[
        {
          key: '/',
          label: 'Home',
          icon: (
            <WarshipsEmblem
              style={{
                maxHeight: '1rem',
                maxWidth: '1rem',
              }}
            />
          ),
        },
        {
          key: 'shipslist',
          label: 'Ships List',
          icon: <BiSolidShip />,
        },
        {
          key: 'contacts',
          label: 'Contacts',
          icon: <LiaMailBulkSolid />,
        },
      ]}
      onClick={goToChosenPage}
    />
  );
}

export { MenuComponent };
