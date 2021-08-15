import React from 'react';



const Basket = ({basket,setBasket}) => {
    console.log(basket)
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
          <button onClick={()=> increaseBasket('margherita')} >
          Add to Basket
          </button>
          <button className="cancel" onClick={()=> decreaseBasket('margherita')} >
          cancel
          </button>

        <p>Veggie Pizza {basket.veggie}</p>
          <button onClick={()=> increaseBasket('veggie')} >
          Add to Basket
          </button>
          <button className="cancel" onClick={()=> decreaseBasket('veggie')} >
          cancel
          </button>

        <p>Pepperoni Pizza {basket.pepperoni}</p>
          <button onClick={()=> increaseBasket('pepperoni')} >
          Add to Basket
          </button>
          <button className="cancel" onClick={()=> decreaseBasket('pepperoni')} >
          cancel</button>
             
        <p>Bacon Pizza {basket.bacon}</p>
          <button onClick={()=> increaseBasket('bacon')} >
          Add to Basket
          </button>
          <button className="cancel" onClick={()=> decreaseBasket('bacon')} >
          cancel</button>

      </section>
        </div>
    );
};

export default Basket;