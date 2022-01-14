import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, url, label, ...props }) => {
  const mode = primary ? '' : 'btnNB-secondary';
  console.log(Button)
    
  return (
    <a
      href={url}
      className={['btnNB', mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </a>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */

};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
};
