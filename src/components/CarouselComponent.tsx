import { Button, Carousel, Image } from 'antd';

import { IShip } from '../models/data';
import { useControlNavigation } from '../hooks/useControlNavigation';

interface ICarouselProps {
  data: IShip[];
}

const parentStyle: React.CSSProperties = {
  width: '100%',
  position: 'relative',
  textAlign: 'center',
};

// const childStyle: React.CSSProperties = {
//   position: 'absolute',
//   top: 0,
//   right: 0,
// };

function CarouselComponent({ data }: ICarouselProps) {
  const { goHome } = useControlNavigation();
  return (
    <div>
      {data && data.length ? (
        <Carousel autoplay dots={{ className: 'carouselDots' }}>
          {data.map((shipInstance) => (
            <section
              className="contentWrapper flexCenter carouselWrapper"
              key={shipInstance.title}
            >
              <article style={parentStyle}>
                <h2>{shipInstance.title}</h2>
              </article>

              <Image
                src={shipInstance.icons.medium}
                style={{
                  maxHeight: '20rem',
                }}
              />
            </section>
          ))}
        </Carousel>
      ) : (
        <section className="contentWrapper flexCenter">
          <h2>You haven't liked anything yet!</h2>
          <h3
            style={{
              marginTop: 0,
            }}
          >
            Try add some ships to your favorites
          </h3>
          <Button onClick={goHome}>Browse all ships</Button>
        </section>
      )}
    </div>
  );
}

export { CarouselComponent };
