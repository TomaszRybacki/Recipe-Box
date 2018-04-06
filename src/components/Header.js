import React from 'react';
import ReactSVG from 'react-svg';
import Modal from './Modal';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility() {
    this.setState({ showModal: !this.state.showModal });
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
          <input className="modal-input" type="text" placeholder="enter pizza name" />
          <p className="modal-txt">Ingredients</p>
          <input className="modal-input" type="text" placeholder="enter all ingredients separated by a comma" />
        </Modal>}
      </header>
    );
  }
}


export default Header;
