import React from 'react';
import PropTypes from 'prop-types';
import './css/module.css';

/**
 * Primary UI component for user interaction
 */



export const Module4 = ({ ...props }) => {

const { rubrik, imgsrc, href, grid, header, subText } = props

let liMod = [];

for(let i=0; i< grid;i++){
  liMod.push(  <li className={'co-module'} >
  <a href={href}><img alt={header} src={imgsrc} /></a>
  {rubrik ? <h5 className="heading5"><a href={href}>{header}</a></h5> : null}
  <p className="block-arrow"><a href={href}>{subText}</a></p>
</li>)
}


return (<>
  <ul class="owl-carousel slider-component" data-desktop-item="4" data-mobile-item="2"
		data-slider="false" data-time="500000" id="co-karusell">
    {liMod}    
  </ul>
  </>);
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


Module4.defaultProps = {
  modu: 'Simple',
  rubrik: true,
  grid: 8,
  header: 'Rubriktext',
  subText: 'Lite längre brödtext',
  href: "#",
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img236x236.webp', 
};
