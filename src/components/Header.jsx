import React from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import Modal from './Modal.jsx';

class Header extends React.Component {
  static propTypes = {
    addPizza: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      newPizza: {
        name: '',
        ingredients: []
      }
    };

    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleNewPizzaName(event) {
    this.setState({
      newPizza: {
        name: event.target.value,
        ingredients: this.state.newPizza.ingredients
      }
    });
  }

  handleNewPizzaIngredients(event) {
    let ingredients = event.target.value;
    ingredients = ingredients.split(',');
    this.setState({
      newPizza: {
        name: this.state.newPizza.name,
        ingredients
      }
    });
  }

  render() {
    const { showModal } = this.state;

    return (
      <header className="header">
        <ReactSVG path="../img/pizza-round.svg" className="logo-icon" />
        <h1 className="header__title">Pizza Menu</h1>
        <ReactSVG path="../img/pizza-round.svg" className="logo-icon" />
        <p className="header__text">You can add, edit and delete recipes of your&apos;s favorite pizzas.<br /> All new recipes are saved in your browser&apos;s local storage.</p>
        <button className="header__button" onClick={this.handleVisibility}>Add Pizza</button>

        { showModal &&
        <Modal onCloseRequest={() => this.handleVisibility()}>
          <p className="modal-txt">Name</p>
          <input
            className="modal-input"
            type="text"
            placeholder="enter pizza name"
            onChange={event => this.handleNewPizzaName(event)}
          />
          <p className="modal-txt">Ingredients</p>
          <input
            className="modal-input"
            type="text"
            placeholder="enter all ingredients separated by a comma"
            onChange={event => this.handleNewPizzaIngredients(event)}
          />
          <button
            className="header__button header__button--color"
            onClick={() => { this.props.addPizza(this.state.newPizza); this.handleVisibility(); }}
          >Add Pizza
          </button>
        </Modal>}
      </header>
    );
  }
}


export default Header;
