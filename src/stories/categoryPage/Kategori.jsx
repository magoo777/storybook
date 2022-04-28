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
}
if(modu==="Simple"  && grid === "8"){
  mod.push(<Module4 imgsrc={imgsrc} props={props} />)
} else if(modu==="Simple" && grid === "2s1b" || grid === "1b2s"){
for (let i = 0; i < 3; i++) {
 
 mod.push(<Module imgsrc={imgsrc} props={props} key={i}  />)
}} else if(modu==="Simple" && grid !== 8){
for (let i = 0; i < nr; i++) {
 mod.push(<Module imgsrc={imgsrc} props={props} key={i}  />)
}} else if(modu==="List"){
  mod.push(<Module3 imgsrc={imgsrc} props={props} />)
}


return (

    <section
      className={['co-grid', `co-grid--${grid}`, `${margin}`].join(' ')}
      
    >
      	
     {
     mod
     }

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



