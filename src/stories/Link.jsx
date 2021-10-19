import React from 'react';
import PropTypes from 'prop-types';


/**
 * Primary UI component for user interaction
 */
export const Link = ({ primary, href, label, ...props }) => {
  const mode = primary ? '' : 'linkNB-sec';
  return (
    <a
      href={href}
      className={['linkNB', mode].join(' ')}   
      {...props}
    >
      {label}
    </a>
  );
};

Link.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  /**
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */

};

Link.defaultProps = {
  primary: false,
  label: "Visa mer"
};
