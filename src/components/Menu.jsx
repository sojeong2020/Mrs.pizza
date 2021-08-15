import React from 'react';

const Menu = (props) => {
    console.log("props" , props)
    return (
    <div>
    <ul className="menu-list">
    {props.allPizza.map((pizza) => {
      return (
        <li key={pizza.name} className="menu-item">
          <img
            src={pizza.imageUrl}
            alt={pizza.name}
            className="menu-img"
          ></img>
          <p>{pizza.name}</p>
        </li>
      );
    })}
    </ul> 
            
    </div>
    );
};

export default Menu;