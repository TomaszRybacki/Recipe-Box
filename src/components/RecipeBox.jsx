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
      defaultRecipes: [
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
      ],
      recipes: []
    };

    this.handleVisibility = this.handleVisibility.bind(this);
  }

  componentDidMount() {
    this.checkLocalStorageValue();
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

    this.saveLocalStorage();
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

  checkLocalStorageValue = () => {
    if (localStorage.length === 0 || localStorage.recipes.length === 2) {
      this.setState({
        recipes: this.state.defaultRecipes
      });
    } else {
      this.setState({
        recipes: JSON.parse(localStorage.getItem('recipes'))
      });
    }
  }

  saveLocalStorage = () => {
    setTimeout(() => localStorage.setItem('recipes', JSON.stringify(this.state.recipes)), 500);
  }

  render() {
    const { showModal } = this.state;

    return (
      <Fragment>
        <Header menu={this.state} addPizza={this.handleAddPizza} save={this.saveLocalStorage} />
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
            onClick={() => { this.handleVisibility(); this.saveLocalStorage(); }}
          >Save
          </button>
        </Modal>}

      </Fragment>
    );
  }
}

export default RecipeBox;
