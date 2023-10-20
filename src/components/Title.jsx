import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

function TitleComponent({ level, children }) {
  return (
    <Title level={level} style={{ textAlign: 'center', margin: 0 }}>
      {children}
    </Title>
  );
}

TitleComponent.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
};

TitleComponent.defaultProps = {
  level: 1,
};

export { TitleComponent };
