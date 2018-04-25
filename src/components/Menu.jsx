import React from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';


class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object).isRequired,
    editPizza: PropTypes.func.isRequired,
    deletePizza: PropTypes.func.isRequired
  }

  pizzaList(pizzaMenu) {
    return (
      <React.Fragment>
        {pizzaMenu.map((pizza, index) => (
          <div className="accordion__item" key={`div ${pizza.name}`}>
            <div className="accordion__header">

              <span className="accordion__header-layout justify-start">
                <ReactSVG path="../img/pizza-piece.svg" className="menu-icon" />
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
