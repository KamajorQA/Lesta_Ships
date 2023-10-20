import { Layout } from 'antd';

import { TitleComponent } from '../components/Title';
import { ShipsTable } from '../components/ShipsTable';
import { Loader } from '../components/Loader';
import { useControlTable } from '../hooks/useControlTable';
const { Content } = Layout;

function HomePage() {
  const { errorMessage, isLoading } = useControlTable();

  return (
    <>
      {errorMessage && (
        <div className="flexCenter">
          <p>Ошибка при загрузке данных с сервера.</p>
          <p>{errorMessage}</p>
        </div>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <Content
          style={{
            padding: '20px 50px',
          }}
        >
          <TitleComponent level={2}>Warships list</TitleComponent>

          <section className="flexCenter contentWrapper">
            <ShipsTable />
          </section>
        </Content>
      )}
    </>
  );
}

export default HomePage;
