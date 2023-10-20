import PropTypes from 'prop-types';

function BaseLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

BaseLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BaseLink.defaultProps = {
  children: null,
};

export { BaseLink };
