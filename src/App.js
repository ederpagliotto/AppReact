import React from 'react';

// Show the data application, how is showed in the video.
// Don't use any CSS, use style to change the color.
// If situation is ative, apply the green color, if it's inative apply red color.
// If the value spent be more than 10000 show a message.
const luana = {
  customer: 'Luana',
  age: 27,
  basket: [
    { name: 'Laptop', price: 'R$ 2500' },
    { name: 'Fridge', price: 'R$ 3000' },
    { name: 'Smartphone', price: 'R$ 1500' },
  ],
  ative: true,
};

const mario = {
  customer: 'Mario',
  age: 31,
  basket: [
    { name: 'Laptop', price: 'R$ 2500' },
    { name: 'Fridge', price: 'R$ 3000' },
    { name: 'Smartphone', price: 'R$ 1500' },
    { name: 'Guitar', price: 'R$ 3500' },
  ],
  ative: false,
};

const App = () => {
  const data = luana;
  //map callback used to return only the item price
  //replace changing (R$ ) per ''
  const total = data.basket
    .map((item) => Number(item.price.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>name: {data.customer}</p>
      <p>age: {data.age}</p>
      <p>
        Situation:{' '}
        <span style={{ color: data.ative ? 'green' : 'red' }}>
          {data.ative ? 'ative' : 'inative'}
        </span>
      </p>
      <p>Total: ${total}</p>
      {total > 10000 && <p>You have spent a lot of money!</p>}
    </div>
  );
};

export default App;
