import React, { Fragment } from 'react';

import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';


class RecipeBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditPizza = this.handleEditPizza.bind(this);
    this.handleDeletePizza = this.handleDeletePizza.bind(this);

    this.state = {
      Hawaiian: ['red sauce', 'cheese', 'ham', 'pineapple'],
      Cowboy: ['red sauce', 'cheese', 'mushrooms', 'sausage', 'olives'],
      Corleone: ['red sauce', 'canadian bacon', 'salami', 'pepperoni', 'italian sausage', 'ground beef']
    };
  }

  handleEditPizza(e) {
    e.preventDefault();
    const name = e.target.id.slice(4);
    this.setState({
      [name]: ['new value']
    });
  }

  handleDeletePizza(e) {
    e.preventDefault();
    const name = e.target.id;
    delete this.state[name];
    this.setState(this.state);
  }


  render() {
    return (
      <Fragment>
        <Header menu={this.state} />
        <Menu menu={this.state} editPizza={this.handleEditPizza} deletePizza={this.handleDeletePizza} />
        <Footer />
      </Fragment>
    );
  }
}

export default RecipeBox;
