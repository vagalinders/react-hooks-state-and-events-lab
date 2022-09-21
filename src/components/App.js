import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode ? "App dark" : "App light"
  const buttonDisplay= isDarkMode? "App light" : "App Dark"
  const handleToggleDarkMode = (e) => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }
   
return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleToggleDarkMode}> {buttonDisplay}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
