import React from 'react';
import Header from './Header';
import Main from './Main';


const appStyle = {
  width: '100%',
  height: '100vh',

  backgroundImage: 'url(../img/pizza.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};


class RecipeBox extends React.Component {
  render() {
    return (
      <div style={appStyle}>
        <Header />
        <Main />
      </div>
    );
  }
}


export default RecipeBox;
