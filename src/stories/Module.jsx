import React from 'react';
import PropTypes from 'prop-types';
import './css/module.css';

/**
 * Primary UI component for user interaction
 */
export const Module = ({ ...props }) => {
const { rubrik, imgsrc, href, header, subText } = props

return (


<div className={'co-module'} >
  <a href={href}><img alt={header} src={imgsrc} /></a>
  {rubrik ? <h5 className="heading5"><a href={href}>{header}</a></h5> : null}
  <p className="block-arrow"><a href={href}>{subText}</a></p>
</div>

  );
};

Module.propTypes = {
 
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

Module.defaultProps = {
  modu: 'Simple',
  rubrik: true,
  header: 'Rubriktext',
  subText: 'Lite längre brödtext',
  href: "#",
};

