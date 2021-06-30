import { useState } from 'react';


const App = () => {
  const [basket,setBasket] =useState({margherita:0,veggie:0,pepperoni:0});

  const pizzas = [
    {
      name: 'Margherita',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg',
    },
    {
      name: 'Veggie',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg',
    },
    {
      name: 'Pepperoni',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/02/04/12/14/pepperoni-4818019_1280.jpg',
    },
  ];


  const increaseBasket = (chosenPizza)=>{
    setBasket((currentBasket)=>{
      const newBasket = {...currentBasket}
      newBasket[chosenPizza]++
      return newBasket
    })
  }

  const decreaseBasket = (chosenPizza)=>{
    setBasket((currentBasket)=>{
      const newBasket = {...currentBasket}
      newBasket[chosenPizza]--
      return newBasket
    })
  }

  return (
    <div className="App">
      <Header />
      <Menu pizzas={pizzas} />
      <Likes />
      <Basket basket={basket} increaseBasket={increaseBasket} decreaseBasket={decreaseBasket}/>
      <Total basket={basket} />
    </div>
  );
};


const Header = ()=>{
  return  <h1>NC Pizza Parlour</h1>
  };


const Menu = (props)=>{
  console.log("props" , props)
  return (
    <ul className="menu-list">
    {props.pizzas.map((pizza) => {
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
  )
};


const Likes = ()=>{
  const [count, setCount] =useState(0);

  return (
<section>
      <h2>count: {count}</h2>
      <button onClick={()=> 
      setCount((currCount)=>{
        return currCount + 1;
      })}
      >
      Like 👍
      </button>
      </section>
  )
};


const Basket = ( {basket, increaseBasket, decreaseBasket})=>{
  return (
<section>
        <h2>Choose you pizza!</h2>
        <p>Margherita {basket.margherita}</p>
        <button onClick={()=> increaseBasket('margherita')}
        >
          order
          </button>
          <button className="cancel" onClick={()=> decreaseBasket('margherita')}
        >
          cancel
          </button>

        <p>Veggie {basket.veggie}</p>
        <button onClick={()=> increaseBasket('veggie')}
        >
          order
          </button>
          <button className="cancel" onClick={()=> decreaseBasket('veggie')}
        >
          cancel
          </button>
        <p>Pepperoni {basket.pepperoni}</p>
        <button onClick={()=> increaseBasket('pepperoni')}
        >
          order</button>
          <button className="cancel" onClick={()=> decreaseBasket('pepperoni')}
        >
          cancel</button>
      </section>
  )
};


const Total = ({basket})=>{
  return (
    <section>
    <h2>total order : {basket.margherita + basket.veggie + basket.pepperoni}</h2>
    </section>
  )
};



export default App;

// Create your new Components here
