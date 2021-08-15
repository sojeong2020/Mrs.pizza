import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Likes from './components/Likes';
import Basket from './components/Basket';
import Total from './components/Total';


const App = () => {
  const [basket,setBasket] =useState({margherita:0,veggie:0,pepperoni:0});
 
   const allPizza = [
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


 return (
    <div className="App">
      <Header />
      <Menu allPizza={allPizza} />
      <Likes />
      <Basket  basket={basket} setBasket={setBasket}/>
      <Total basket={basket} />
    </div>
  );
};



export default App;


