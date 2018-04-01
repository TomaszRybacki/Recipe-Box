import React from 'react';

const pizzaMenu = {
  Hawaiian: ['red sauce', 'cheese', 'ham', 'pineapple'],
  Cowboy: ['red sauce', 'cheese', 'mushrooms', 'sausage', 'olives'],
  Corleone: ['red sauce', 'canadian bacon', 'salami', 'pepperoni', 'italian sausage', 'ground beef']
};

const pizzaList = () => (
  <React.Fragment>
    {Object.keys(pizzaMenu).map((pizza, index) => (
      <div className="accordion__item" key={`div ${pizza}`}>
        <h3 className="accordion__title" key={`h3 ${pizza}`}>{pizza}</h3>
        <ul className="accordion__body" key={`ul ${pizza}`}>

          {Object.values(pizzaMenu)[index].map(ingredient => (
            <li className="accordion__ingredient" key={`${pizza} ${ingredient}`}>&#9900; {ingredient}</li>
          ))}

        </ul>
      </div>
    ))}
  </React.Fragment>
);


class Menu extends React.Component {
  render() {
    return (
      <main className="menu-box">
        {pizzaList()}
      </main>
    );
  }
}


export default Menu;
