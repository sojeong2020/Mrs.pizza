import React from 'react';

const Total = ({basket}) => {
    return (
        <div>
        <section>
          <h2>total order : {basket.margherita + basket.veggie + basket.pepperoni + basket.bacon}</h2>
        </section>
        </div>
    );
};

export default Total;