import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';


class RecipeBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
        <Footer />
      </React.Fragment>
    );
  }
}


export default RecipeBox;
