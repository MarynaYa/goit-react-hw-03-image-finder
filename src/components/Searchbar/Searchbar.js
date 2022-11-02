import React, { Component } from "react";
//import PropTypes from "prop-types";
import s from "./Searchbar.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
    state = {
        searchQuery: '',
        page: 1,        
    }

handleSubmit =(evt) => {
    evt.preventDefault();

    if (this.state.searchQuery.trim() === '') {
        toast.info('Enter your request.');
        return;
    }

    this.props.onSubmit(this.state.searchQuery, this.state.page);
    this.setState({ searchQuery: '', page: 1 });
};

handleChange = (evt) => {
    this.setState({
        value: evt.target.value,
      });
};

render() {
    const {
        searchbar,
        saerchbarForm,
        searchbarButton,
        searchbarButtonLabel,
        searchbarInput,    
      } = s;
    const { value } = this.state;
    return (
<header className={searchbar}>
  <form className={saerchbarForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={searchbarButton}>
      <span className={searchbarButtonLabel}>Search</span>
    </button>

    <input
      className={searchbarInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      value={value}
      onChange={this.handleChange}
    />
  </form>
       
<ToastContainer autoClose={3000} theme={'colored'} />
</header>
    )
};

};

