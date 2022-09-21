import React,{useState} from "react";

function Item({ name, category }) {
  const [isInCart,setIsInCart]=useState(false)
  const appCart= !isInCart ? "Add to Cart" : "Remove From Cart"
  const handleCartClick = (e) => {
    setIsInCart(isInCart => !isInCart)
  }
  return (
    <li className={appCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleCartClick}>{appCart}</button>
    </li>
  );
}

export default Item;
