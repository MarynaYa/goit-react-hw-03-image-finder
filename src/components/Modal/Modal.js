import { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';


export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
    window.addEventListener("click", this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
    window.removeEventListener("click", this.onCloseModal);
  }

  onCloseModal = (evt) => {
    if (evt.code === "Escape" || evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
   
    return (
      <div className={s.overlay} onClick={this.onCloseModal}>
        <div className={s.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
};

