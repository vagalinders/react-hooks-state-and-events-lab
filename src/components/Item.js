import React,{useState} from "react";

function Item({ name, category }) {
  const [isInCart,setIsInCart]=useState(false)
  const appCart= !isInCart ? "Add to Cart" : "Remove From Cart"
  const appButtonDisplay= !isInCart ? "" : "in-cart";
  const handleCartClick = (e) => {
    setIsInCart(isInCart => !isInCart)
  }

  return (
    <li className={appButtonDisplay}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleCartClick}>{appCart}</button>
    </li>
  );
}

export default Item;
