import React from 'react'

function Menu({image, heading, para}){
    return(
      <div className="menu">
      <div className="menu-image">
         <img src={image} alt="fish"/>
      </div>
      <div className="menu-text">
            <h3>{heading}</h3>
            <p>{para}</p>
      </div>
    </div>
    )
  }


export default Menu