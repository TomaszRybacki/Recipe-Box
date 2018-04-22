import React from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';


class Menu extends React.Component {
  pizzaList(pizzaMenu) {
    return (
      <React.Fragment>
        {Object.keys(pizzaMenu).map((pizza, index) => (
          <div className="accordion__item" key={`div ${pizza}`}>
            <div className="accordion__header">

              <span className="accordion__header-layout justify-start">
                <ReactSVG path="../img/pizza-piece.svg" className="menu-icon" />
                <h3 className="accordion__title" key={`h3 ${pizza}`}>{pizza}</h3>
              </span>

              <span className="accordion__header-layout justify-end">
                <button
                  className="accordion__button"
                  id={`Edit${pizza}`}
                  onClick={this.props.editPizza}
                >
                Edit
                </button>
                <button
                  className="accordion__button"
                  id={pizza}
                  onClick={this.props.deletePizza}
                >
                Delete
                </button>
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
  }

  render() {
    return (
      <main className="menu-box">
        {this.pizzaList(this.props.menu)}
      </main>
    );
  }
}


Menu.propTypes = {
  menu: PropTypes.objectOf(PropTypes.array).isRequired,
  editPizza: PropTypes.func.isRequired,
  deletePizza: PropTypes.func.isRequired
};

export default Menu;
