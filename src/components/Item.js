import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(true);

  function handleClick() {
    setCart((cart) => !cart);
  }

  const itemClass = cart ? "" : "in-cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={cart ? "add" : "remove"} 
      onClick={handleClick}>{cart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
