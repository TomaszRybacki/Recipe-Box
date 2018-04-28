import React, { Fragment } from 'react';

import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import Modal from './Modal.jsx';


class RecipeBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      editedPizzaIndex: null,
      recipes: [
        {
          name: 'Hawaiian',
          ingredients: ['red sauce', ' cheese', ' ham', ' pineapple']
        },
        {
          name: 'Cowboy',
          ingredients: ['red sauce', ' cheese', ' mushrooms', ' sausage', ' olives']
        },
        {
          name: 'Corleone',
          ingredients: ['red sauce', ' canadian bacon', ' salami', ' pepperoni', ' italian sausage', ' ground beef']
        }
      ]
    };

    this.handleVisibility = this.handleVisibility.bind(this);
  }

  getIndexOfEditedPizza = (index) => {
    this.setState({
      editedPizzaIndex: index
    });
  }

  handleVisibility() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleEditPizzaName = (event) => {
    const recipes = [...this.state.recipes];
    recipes[this.state.editedPizzaIndex].name = event.target.value;

    this.setState({
      recipes
    });
  }

  handleEditPizzaIngredients = (event) => {
    const recipes = [...this.state.recipes];
    recipes[this.state.editedPizzaIndex].ingredients = event.target.value.split(',');
  }

  handleDeletePizza = (index) => {
    const recipes = [...this.state.recipes];
    recipes.splice(index, 1);
    this.setState({
      recipes
    });
  }

  handleAddPizza = (newPizza) => {
    const recipes = [...this.state.recipes];
    recipes.push({
      name: newPizza.name,
      ingredients: newPizza.ingredients
    });
    this.setState({
      recipes
    });
  }


  render() {
    const { showModal } = this.state;

    return (
      <Fragment>
        <Header menu={this.state} addPizza={this.handleAddPizza} />
        <Menu
          menu={this.state.recipes}
          editPizza={(event) => { this.getIndexOfEditedPizza(event); this.handleVisibility(); }}
          deletePizza={this.handleDeletePizza}
        />
        <Footer />

        { showModal &&
        <Modal onCloseRequest={() => this.handleVisibility()}>
          <p className="modal-txt">Name</p>
          <input
            className="modal-input"
            type="text"
            placeholder="enter pizza name"
            defaultValue={this.state.recipes[this.state.editedPizzaIndex].name}
            onChange={event => this.handleEditPizzaName(event)}
          />
          <p className="modal-txt">Ingredients</p>
          <input
            className="modal-input"
            type="text"
            placeholder="enter all ingredients separated by a comma, followed by a space"
            defaultValue={this.state.recipes[this.state.editedPizzaIndex].ingredients}
            onChange={event => this.handleEditPizzaIngredients(event)}
          />
          <button
            className="header__button header__button--color"
            onClick={() => { this.handleVisibility(); }}
          >Save
          </button>
        </Modal>}

      </Fragment>
    );
  }
}

export default RecipeBox;
