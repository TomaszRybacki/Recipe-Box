import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    e.preventDefault();
    if (e.keyCode === 27) {
      onCloseRequest();
      window.removeEventListener('keyup', this.handleKeyUp, false);
    }
  }

  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;
    e.preventDefault();
    if (e.target.className === 'app-root') {
      onCloseRequest();
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }

  render() {
    const { onCloseRequest, children } = this.props;

    return (
      <div className="modal-box">
       <button className="modal-button" onClick={onCloseRequest}>&#10006;</button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
