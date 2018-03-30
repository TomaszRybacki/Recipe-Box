import React from 'react';
import ReactSVG from 'react-svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ReactSVG path="../img/pizza-round.svg" className="logo-icon" />
        <h1 className="header__title">Pizza</h1>
        <ReactSVG path="../img/pizza-round.svg" className="logo-icon" />
        <p className="header__text">You can add, edit and delete recipes of your&apos;s favorite pizzas.<br /> All new recipes are saved in your browser&apos;s local storage.</p>
      </header>
    );
  }
}


export default Header;
