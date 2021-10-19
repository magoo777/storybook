import React from 'react';
import PropTypes from 'prop-types';
import './css/module.css';

/**
 * Primary UI component for user interaction
 */



export const Module4 = ({ ...props }) => {
const { rubrik, imgsrc, href, header, subText } = props

return (


<li className={'co-module'} >
  <a href={href}><img alt={header} src={imgsrc} /></a>
  {rubrik ? <h5 className="heading5"><a href={href}>{header}</a></h5> : false}
  <p className="block-arrow"><a href={href}>{subText}</a></p>
</li>

  );
};

Module4.propTypes = {
 
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  href: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired
};


