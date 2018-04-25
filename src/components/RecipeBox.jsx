import React, { Fragment } from 'react';

import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';


class RecipeBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          name: 'Hawaiian',
          ingredients: ['red sauce', 'cheese', 'ham', 'pineapple']
        },
        {
          name: 'Cowboy',
          ingredients: ['red sauce', 'cheese', 'mushrooms', 'sausage', 'olives']
        },
        {
          name: 'Corleone',
          ingredients: ['red sauce', 'canadian bacon', 'salami', 'pepperoni', 'italian sausage', 'ground beef']
        }
      ]
    };
  }

  handleEditPizza = (index) => {
    const recipes = this.state.recipes.slice();
    const editedPizza = recipes.filter((item, itemIndex) => index === itemIndex);
    console.log(editedPizza);
    const { name } = editedPizza[0];
    console.log(name);

    this.setState({
      recipes: [
        {
          name,
          ingredients: ['nev value']
        }
      ]
    });
  }

  handleDeletePizza = (index) => {
    const recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({ recipes });
  }


  render() {
    return (
      <Fragment>
        <Header menu={this.state} />
        <Menu menu={this.state.recipes} editPizza={this.handleEditPizza} deletePizza={this.handleDeletePizza} />
        <Footer />
      </Fragment>
    );
  }
}

export default RecipeBox;
