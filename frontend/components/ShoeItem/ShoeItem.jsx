import React, { useContext } from "react";
import "./ShoeItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext"; // ✅ Import StoreContext

const ShoeItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="shoe-item">
      <div className="shoe-item-img-container">
        <img className="shoe-item-img" src={image} alt={name} />

        {!cartItems?.[id] ? ( // ✅ Ensure cartItems is defined before accessing `id`
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="shoe-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p className="item-count">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Increase quantity"
            />
          </div>
        )}
      </div>

      <div className="shoe-item-info">
        <div className="shoe-item-name">
          <p>{name}</p>
          <p>Thrifted</p>
        </div>
        <p className="shoe-item-desc">{description}</p>
        <p className="shoe-item-price">Rs. {price}</p>
      </div>
    </div>
  );
};

export default ShoeItem;
