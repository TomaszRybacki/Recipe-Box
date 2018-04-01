import React from 'react';
import Header from './Header';
import Menu from './Menu';


const appStyle = {

};


class RecipeBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
      </React.Fragment>
    );
  }
}


export default RecipeBox;
