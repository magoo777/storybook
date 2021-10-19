import React from 'react';
import PropTypes from 'prop-types';
import { Module } from '../Module'
import { Module3 } from '../Module3'
import { Module4 } from '../Module4'
import '../css/kategori.css';


export const Kategori = ({modu, grid, imgsrc, margin, img, rubrik, href, header, subText,  ...props }) => {

let nr = parseInt(grid)
let mod = [];

if(grid=== "2"){
  imgsrc="https://images.clasohlson.com/SE/storybook/img488x236.webp"
}else if(grid=== "3"){
  imgsrc="https://images.clasohlson.com/SE/storybook/img320x236.webp"
}else {
 imgsrc="https://images.clasohlson.com/SE/storybook/img236x236.webp" 
}console.log("grid " + grid)
if(modu==="Simple"  && grid === "8"){
  for (let i = 0; i < nr; i++) {
  mod.push(<Module4 imgsrc={imgsrc} href={href} rubrik={rubrik} header={header} subText={subText} key={i} props={props} />)}
}else if(modu==="Simple" && grid !== 8){
for (let i = 0; i < nr; i++) {
    console.log("Hej ifrån modul 2 ")
 mod.push(<Module imgsrc={imgsrc} href={href} rubrik={rubrik} header={header} subText={subText} key={i}  />)
}}else if(modu==="List"){
  mod.push(<Module3 props={props} />)
}



return (

    <section
      className={['co-grid', `co-grid--${grid}`, `${margin}`].join(' ')}
      {...props}
    >
      {/* <ul className="owl-carousel slider-component mb-32" data-desktop-item="4" data-margin="10" data-mobile-item="2" data-slider="false" data-time="500000" id="co-karusell"> */}
      	
     {
     mod
     }
     {/* </ul>      */}
    </section>


  );
};

Kategori.propTypes = {
 

  margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),
  
    // modules: PropTypes.oneOf(['1', '2', '3', '4']),
  /**
   * Button contents
   */

}


Kategori.defaultProps = {
  rubrik: true,
  grid: 4,
  header: 'Rubriktext',
  subText: 'Lite längre brödtext',
  href: "#",

};



