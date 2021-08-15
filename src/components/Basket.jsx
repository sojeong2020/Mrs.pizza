import React from 'react';



const Basket = ({basket,setBasket}) => {
    
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
        <div>
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
        </div>
    );
};

export default Basket;