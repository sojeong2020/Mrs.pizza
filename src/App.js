import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

import Basket from './components/Basket';
import Total from './components/Total'
import Footer from './components/Footer';


const App = () => {
  const [basket,setBasket] =useState({margherita:0,veggie:0,pepperoni:0,bacon:0});
 
   const allPizza = [
    {
      name: 'Margherita',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg',
    },
    {
      name: 'Veggie Pizza',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg',
    },
    {
      name: 'Pepperoni Pizza',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/02/04/12/14/pepperoni-4818019_1280.jpg',
    },
    {
      name: 'Bacon Pizza',
      imageUrl:
        'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
  ]; 
 

 return (
    <div className="App">
      <Header />
      <Menu allPizza={allPizza} />
      
      <Basket  basket={basket} setBasket={setBasket}/>
      <Total basket={basket} />
      <Footer />
    </div>
  );
};



export default App;


