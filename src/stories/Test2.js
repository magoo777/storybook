import React from 'react'

const Test2 = (...props) => {
console.log(props);
const {imgsrc, rubrik, subText} = props[0].props
    return (
      <section style={{border: "1px solid black;"}}>
    <div>
       <img alt={props[0].header} src={imgsrc}/>
    </div>
    <div>
      {rubrik ? <h5 className="heading5">{props[0].header}</h5> : false}
      <p>{subText}</p>
    </div>        
    </section>
    )
}

export default Test2
