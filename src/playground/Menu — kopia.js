import React from 'react';

const pizzaMenu = {
  Hawaiian: ['red sauce', 'cheese', 'ham', 'pineapple'],
  Cowboy: ['red sauce', 'cheese', 'mushrooms', 'sausage', 'olives'],
  Corleone: ['red sauce', 'canadian bacon', 'salami', 'pepperoni', 'italian sausage', 'ground beef']
};

const pizzaList = () => {
  return (
    <div>
      {Object.keys(pizzaMenu).map((pizza, index) => {
        return (
          <div>
            <h3>{pizza}</h3>
            <ul key={pizza.toString()}>
              {Object.values(pizzaMenu)[index].map(ingredient => <li key={pizza.toString() + ingredient.toString()}>{ingredient}</li>)}
            </ul>
          </div>
        );
      })}
    </div>
  );
};


class Menu extends React.Component {
  render() {
    return (
      <main className="menu-box">
        <AccordionItem />
      </main>
    );
  }
}


class AccordionItem extends React.Component {
  render() {
    return (
      <div>
        {pizzaList()}
      </div>
    );
  }
}

export default Menu;
