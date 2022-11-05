import React, { Component } from "react";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from "./Button/Button";
//import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Api from 'services/serviceApi';
import s from './App.module.css';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],    
    page: 1,
    error: '',
    bigImage: '',
    largeImageURL: '',
    showModal: false,
    totalHits: 1,
    contentLoad: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImages = prevState.searchQuery;
    const nextImages = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImages !== nextImages) {
      this.setState({
        
        page: 1,
        images: [],
      });
      this.fetchGallery(nextImages, nextPage);
    }

    if (prevPage !== nextPage && nextPage !== 1) {
      this.fetchGallery(nextImages, nextPage);
    }
    if (nextPage >= 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchGallery(nextImages, nextPage) {
    Api.fetchGallery(nextImages, nextPage)
      .then(data => {
        this.setState(prevState => {
          return {
            totalHits: data.totalHits,
            prevState,
            images: [...prevState.images, ...data.hits],
           
            searchQuery: nextImages,
          };
        });
      })
      .catch(error => this.setState({ error }));
  }

 handleFormSubmit = searchQuery => {
  this.setState({ searchQuery, page: 1 });
 };

 toggleModal = largeImageURL => {
  this.setState(({ showModal, bigImage }) => ({
    showModal: !showModal,
    bigImage: largeImageURL,
  }));
};

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

render() {
  const { images, bigImage, contentLoad } = this.state; 

  return (
    <div className={s.appDiv}>
       <Searchbar onSubmit={this.handleFormSubmit} />
      <ImageGallery images={images} toggleModal={this.toggleModal} />
       
        {this.state.showModal && (
            <Modal onClickModal={this.toggleModal} largeImageURL={bigImage} />
          )}
         {!contentLoad && <Loader />}
        <Button onClick={this.handleLoadMore} />
         
    </div>
  );
}

};

export default App;