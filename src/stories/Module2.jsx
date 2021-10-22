import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from './Link'
import './css/module.css';

export const Module2 = ({...props}) => {
const {img,imgsrc ,href, rubrik, header, subText, subText2} = props;
let myID = ""
let myID2 = ""
useEffect(() => {
  myID = document.getElementById('myBtn');
  myID.setAttribute("onclick","toggleElements()");
  myID2 = document.getElementById('myBtn2');
  myID2.setAttribute("onclick","toggleElements()");
  return () => {
    console.log("cleanup");
  }
}, [])

return ( <> 

    <div><img alt={header} id="readMoreImg"
        src={imgsrc} />
    {rubrik ? <h2 className="heading2"><a href={href}>{header}</a></h2> : false}    
    <p>{subText} <a href="#" id="myBtn" className="readMore">Visa mer</a></p>
    
    <h2 className="heading2">{header}</h2>
        <p>{subText2}</p>
     <h2 className="heading2">{header}</h2>
        <p>{subText2} <a href="#" id="myBtn2" className="readLess">Visa mindre</a> </p>
            <div style={{clear:'both'}}></div>
    
     </div>
    
</>
  );
};

Module2.propTypes = {
 
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */

  href: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  subText2: PropTypes.string.isRequired
};

Module2.defaultProps = {
  modu: 'BildoText',
  rubrik: true,
  grid: 1,
  header: 'Rubriktext',
  subText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  subText2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  href: "#",
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img488x236.webp', 

};


