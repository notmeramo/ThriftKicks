import React, { useContext } from 'react';
import './ShoeDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import ShoeItem from '../ShoeItem/ShoeItem';

const ShoeDisplay = ({ category }) => {
  const { shoe_list } = useContext(StoreContext);

  return (
    <div className="shoe-display" id="shoe-display">
      {/* <h2>Top Shoes Near You</h2> */}
      <div className="shoe-display-list">
        {shoe_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <ShoeItem 
                key={item._id} 
                id={item._id} 
                name={item.name} 
                description={item.description} 
                price={item.price} 
                image={item.image} 
              />
            );
          }
          return null; // Ensures that map always returns something
        })}
      </div>
    </div>
  );
};

export default ShoeDisplay;
