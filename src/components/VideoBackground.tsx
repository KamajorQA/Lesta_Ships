import submarineBg from '../assets/videos/submarine.mp4';

function VideoBackground() {
  return (
    <div className="flexCenter">
      <video src={submarineBg} autoPlay loop muted className="videoFrame" />
    </div>
  );
}

export { VideoBackground };
