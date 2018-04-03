import React from 'react';
import ReactSVG from 'react-svg';

class Header extends React.Component {
  addPizza() {
    console.log('test');
  }

  render() {
    return (
      <header className="header">
        <ReactSVG path="../img/pizza-round.svg" className="logo-icon" />
        <h1 className="header__title">Pizza Menu</h1>
        <ReactSVG path="../img/pizza-round.svg" className="logo-icon" />
        <p className="header__text">You can add, edit and delete recipes of your&apos;s favorite pizzas.<br /> All new recipes are saved in your browser&apos;s local storage.</p>
        <button className="header__button" onClick={this.addPizza}>Add Pizza</button>
      </header>
    );
  }
}


export default Header;
