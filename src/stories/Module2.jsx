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
    {rubrik ? <h5 className="heading5"><a href={href}>{header}</a></h5> : false}    
    <p>{subText}</p>
    <a href="#" id="myBtn" class="readMore">Visa mer</a>
     <h2>Vad är skillnaden på en reflex och reflekterande material? </h2>
        <p>Våra reflexer är testade enligt EU-standard för personreflexer med god synbarhet för icke yrkesmässigt bruk.
            Produkter i reflekterande material som inte kallas reflex ger också bra synlighet i mörker, men har inte
            testats enligt EU-standard. </p>
    <a href="#" id="myBtn2" class="readLess">Visa mindre</a>
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


