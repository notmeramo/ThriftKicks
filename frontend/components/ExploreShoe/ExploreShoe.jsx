import React from 'react'
import './ExploreShoe.css'
import { menu_list } from '../../assets/assets'

const ExploreShoe = ({category,setCategory}) => {

    return (
      <div className='explore-menu' id='explore-menu'>
          <h1>Explore the categories</h1>
          <p className="explore-menu-text">
          Step into a world of style with our diverse collection of shoes, designed to elevate any outfit. Whether you're seeking comfort or elegance, find the perfect pair to express your unique flair!
          </p>
       <div className="explore-menu-list">
      {menu_list.map((item, index) => {
          return (
              <div onClick ={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
                  <img className = {category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                  <p>{item.menu_name}</p>
              </div>
          );
      })}
  </div>
  <hr />
      </div>
    )
  }
  
  export default ExploreShoe;