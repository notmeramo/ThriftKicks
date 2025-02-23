import React from 'react'
import './banner.css'
import { assets } from '../../assets/assets'

const banner = () => {
  return (
    
    <>
    <p className="browser-warning">
  If this looks wonky to you it's because this browser doesn't support the CSS
  property 'aspect-ratio'.
</p>

<div className="container">
<div className="stack">
  <div className="card">
    <div className="image">
        <img src={assets.luffyshoe} alt="" />
    </div>
    <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, quas!</p>
    </div>

  </div>
</div>

<div className="stack">
  <div className="card">
    <div className="image">
        <img src={assets.luffyshoe} alt="" />
    </div>
    <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, quas!</p>
    </div>

  </div>
</div>

<div className="stack">
  <div className="card">
    <div className="image">
        <img src={assets.luffyshoe} alt="" />
    </div>
    <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, quas!</p>
    </div>

  </div>
</div>


</div></>
  )
}

export default banner