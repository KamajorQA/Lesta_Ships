import { Content } from 'antd/es/layout/layout';
import { Image } from 'antd';

import { TitleComponent } from '../components/Title';
import NotFound from '../assets/img/404NotFound.jpg';
import NotFoundSmall from '../assets/img/404NotFound_half.jpg';

function NotFoundPage() {
  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>404</TitleComponent>

      <section className="flexCenter contentWrapper">
        <h1>Not Found</h1>
        <Image
          width={'50%'}
          src={NotFound}
          placeholder={
            <Image preview={true} src={NotFoundSmall} width={'50%'} />
          }
        />

        <h3>...no warship found</h3>
      </section>
    </Content>
  );
}

export default NotFoundPage;
