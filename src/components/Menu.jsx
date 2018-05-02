import React from 'react';
import PropTypes from 'prop-types';

import IconPizzaPiece from './../iconComponents/IconPizzaPiece.jsx';


class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object).isRequired,
    editPizza: PropTypes.func.isRequired,
    deletePizza: PropTypes.func.isRequired
  }

  handleSlideAnimationClick = (event) => {
    const accordionBodyElem = event.target.parentElement.nextSibling;

    if (accordionBodyElem !== null && accordionBodyElem.classList.contains('accordion__body')) {
      accordionBodyElem.classList.toggle('animate-slide');
    }
  }

  handleSlideAnimationKey = (event) => {
    if (event.keyCode === 13) {
      const accordionBodyElem = event.target.nextSibling;
      accordionBodyElem.classList.toggle('animate-slide');
    }
  }

  pizzaList(pizzaMenu) {
    return (
      <React.Fragment>
        {pizzaMenu.map((pizza, index) => (
          <div className="accordion__item" key={`div ${pizza.name}`}>
            <div
              className="accordion__header"
              onKeyDown={this.handleSlideAnimationKey}
              onClick={this.handleSlideAnimationClick}
              role="button"
              tabIndex="0"
            >

              <span className="accordion__header-layout justify-start">
                <IconPizzaPiece className="menu-icon" />
                <h3 className="accordion__title" key={`h3 ${pizza.name}`}>{pizza.name}</h3>
              </span>

              <span className="accordion__header-layout justify-end">
                <button
                  className="accordion__button"
                  id={`Edit${pizza.name}`}
                  onClick={event => this.props.editPizza(index)}
                >
                Edit
                </button>
                <button
                  className="accordion__button"
                  id={pizza.name}
                  onClick={event => this.props.deletePizza(index)}
                >
                Delete
                </button>
              </span>

            </div>
            <ul className="accordion__body" key={`ul ${pizza}`}>

              {pizzaMenu[index].ingredients.map(ingredient => (
                <li className="accordion__ingredient" key={`${pizza} ${ingredient}`}>&#9900; {ingredient}</li>
              ))}

            </ul>
          </div>
        ))}
      </React.Fragment>
    );
  }

  render() {
    return (
      <main className="menu-box">
        {this.pizzaList(this.props.menu)}
      </main>
    );
  }
}

export default Menu;
