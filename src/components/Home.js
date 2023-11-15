import React from 'react'
import {useState} from 'react'
import main from '../images/dine-main.png'
import farm from '../images/farm-land.png'
import serve from '../images/serve.png'
import fish from '../images/fish.png'
import beef from '../images/beef.png'
import choco from '../images/choco_ice.png'
import family from '../images/family-reserve.png'
import special from "../images/special-dine.png"
import social from "../images/social.png"
import Menu from './Menu'
import Slide from './Slide'
import { Link } from 'react-router-dom'
const texts = [
  {heading:"Enjoyable place for all the family", para:" Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."},
  {heading:"The most locally sourced food", para:" All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."},
  {heading:"Seared Salmon Fillet", para:"Our locally sourced salmon served with a refreshing buckwheat summer salad."},
  {heading:"Rosemary Filet Mignon", para:"Our prime beef served to your taste with a delicious choice of seasonal sides."},
  {heading:"Summer Fruit Chocolate Mousse", para:"Creamy mousse combined with summer fruits and dark chocolate shavings."},
]
const slideShow = [family,special, social]
const Home = () => {
  const[isActive, setActive] = useState(true)
  const[currentId, setCurrentId] = useState(0)

  return (
    <div className='home'>
        <header>
            <div className="pre-image">
                <img src={main} alt="theimage"/>
            </div>
            <div className="book">
                 <div className='inner-book'>
                 <h1 className="res-name">dine</h1>
                  <h2>Exquisite dining since 1989</h2>
                  <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                  <Link to="/reserve" className="btn">Book a table</Link>
                 </div>
            </div>
        </header>
        <section className="slide">
           <div className="inner">
              <Slide heading={texts[0].heading} para={texts[0].para} image={farm}/>
              <Slide heading={texts[1].heading}  para={texts[1].para} image={serve}/>
           </div>
        </section>

        <section className="food-highlight">
            <div className="inner-highlight">
                  <div className="heading">
                      <svg xmlns="http://www.w3.org/2000/svg" width="71" height="7" viewBox="0 0 71 7" fill="none">
                        <rect x="15" y="3" width="56" height="1" fill="#9E7F66"/>
                        <circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66"/>
                      </svg>
                      <h2>A few highlights from our menu</h2>
                      <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                  </div>
              <div className="menus">
                  <Menu image={fish} heading={texts[2].heading} para={texts[2].para}/>
                  <Menu image={beef} heading={texts[3].heading} para={texts[3].para}/>
                  <Menu image={choco}heading={texts[4].heading} para={texts[4].para}/>
              </div>
            </div>
        </section>

        <section className="type-reserve">
                <div className="inner-type">
                      <div className="type-image">
                        <img src={slideShow[currentId]} alt="pic"/>
                        <div className='des-rec'></div>
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
                      <div className="this-type">
                      <div className="types">
                          <p className={currentId === 0 ? "active" : ""} onMouseEnter={()=>{setCurrentId(0)}}>family gathering</p>
                          <p className={currentId === 1 ? "active" : ""} onMouseEnter={()=>{setCurrentId(1)}}>special events</p>
                          <p className={currentId === 2 ? "active" : ""} onMouseEnter={()=>{setCurrentId(2)}}
                          >social events</p>
                      </div>
                      <div className="type-text">
                          <h3>Family Gathering</h3>
                          <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                          <Link to="/reserve" className="btn">Book a table</Link>
                      </div>
                      </div>
                     
                </div>
        </section>

        <section className="ready">
            <div className="inner-ready">
                  <h3>Ready to make a reservation?</h3>
                  <Link to="/reserve" className="btn">Book a table</Link>
            </div>
        </section>
        
    </div>
  )
}

export default Home