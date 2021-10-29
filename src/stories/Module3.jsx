import React from 'react';
import PropTypes from 'prop-types';
import './css/module.css';

export const Module3 = ({...props }) => {
const {imgsrc, href, header, subText } = props

return (<>

  <div className="cat-list">
                <a href={href}>
                <img alt={header} src={imgsrc}/>
            </a>
            <ol class="cat-list-first">
                <li>
            <h5 className="heading5"><a href={href}>{header}</a></h5>
            <p><a href={href}>
                    {subText}</a>
            </p>
                </li>
            </ol>
  </div>
  <div className="cat-list">
                <a href={href}>
                <img alt={header} src={imgsrc}/>
            </a>
            <ol class="cat-list-sec">
                <li>
            <h5 className="heading5"><a href={href}>{header}</a></h5>
            <p><a href={href}>
                    {subText}</a>
            </p>
                </li>
            </ol>
  </div>
  <div className="cat-list">
                <a href={href}>
                <img alt={header} src={imgsrc}/>
            </a>
            <ol class="cat-list-third">
                <li>
            <h5 className="heading5"><a href={href}>{header}</a></h5>
            <p><a href={href}>
                    {subText}</a>
            </p>
                </li>
            </ol>
  </div>
</>
  );
};

Module3.propTypes = {
 
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

Module3.defaultProps = {
  modu: 'List',
  rubrik: true,
  grid: 4,
  header: 'Rubriktext',
  subText: 'Lite längre brödtext',
  href: "#",
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img320x236.webp', 
};


