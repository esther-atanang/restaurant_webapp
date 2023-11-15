import React from 'react'

function Slide({heading, para, image}){
    return(
            <div className="family">
                        <div className="image">
                            <img src={image} alt="food"/>
                            <div className='recs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="76" viewBox="0 0 160 76" fill="none">
                          <rect y="70" width="160" height="6" fill="#9E7F66"/>
                          <rect y="56" width="160" height="6" fill="#9E7F66"/>
                          <rect y="42" width="160" height="6" fill="#9E7F66"/>
                          <rect y="28" width="160" height="6" fill="#9E7F66"/>
                          <rect y="14" width="160" height="6" fill="#9E7F66"/>
                          <rect width="160" height="6" fill="#9E7F66"/>
                        </svg>
                        </div>
                        </div>
                        <div className='des-rec'></div>
                        <div className="text">
                       
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="71" height="7" viewBox="0 0 71 7" fill="none">
                          <rect x="15" y="3" width="56" height="1" fill="#9E7F66"/>
                          <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66"/>
                        </svg></div>
                        <div className="description">
                           <h2>{heading}</h2>
                              <p className="the-text">
                                  {para}
                              </p>
                        </div>
                             
                        </div>
                </div>
    )
  }
  

export default Slide