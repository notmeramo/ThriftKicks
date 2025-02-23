import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='Header'>
        <div className="header-contents">
        <h2> Nike Air Jordans</h2>
        <p className='p-div'>Jordan Brand is celebrating the release of <span className='header-span'>  Spider-Man: Into the Spider-Verse </span>with a special edition Air Jordan 1 Retro High OG 'Origin Story'. Matching the pair seen in the film on Miles Morales, this AJ1 puts a twist on a classic colourway. Like Morales' character, the AJ1 is known for defying the norm. Like the mask, the AJ1 can be worn by anyone and empower those who wear it to be heroic.</p> 
        <button className="header-button"><a href="#">SHOP NOW</a></button>
        </div>
    </div>
  )
}

export default Header