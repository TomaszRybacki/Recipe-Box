import React from 'react';
import ReactSVG from 'react-svg';

const pizzaMenu = {
  Hawaiian: ['red sauce', 'cheese', 'ham', 'pineapple'],
  Cowboy: ['red sauce', 'cheese', 'mushrooms', 'sausage', 'olives'],
  Corleone: ['red sauce', 'canadian bacon', 'salami', 'pepperoni', 'italian sausage', 'ground beef']
};

const pizzaList = () => (
  <React.Fragment>
    {Object.keys(pizzaMenu).map((pizza, index) => (
      <div className="accordion__item" key={`div ${pizza}`}>
        <div className="accordion__header">

          <span className="accordion__header-layout justify-start">
            <ReactSVG path="../img/pizza-piece.svg" className="menu-icon" />
            <h3 className="accordion__title" key={`h3 ${pizza}`}>{pizza}</h3>
          </span>

          <span className="accordion__header-layout justify-end">
            <button className="accordion__button">Edit</button>
            <button className="accordion__button">Delete</button>
          </span>

        </div>
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
