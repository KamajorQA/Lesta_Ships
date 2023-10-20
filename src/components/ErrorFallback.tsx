import { Button } from 'antd';

function ErrorFallback() {
  return (
    <section className="flexCenter contentWrapper">
      <h1>An error occured!</h1>
      {/* eslint-disable no-restricted-globals*/}
      <Button onClick={() => location.reload()}>Try reloading this page</Button>
    </section>
  );
}

export { ErrorFallback };
