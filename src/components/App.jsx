import React, { Component } from "react";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    status: Status.IDLE,
    page: 1,
    error: '',
    bigImage: '',
    showModal: false,
    totalHits: 1,
  };

 handleFormSubmit = () => {

 };
 toggleModal = () => {

 }

render() {
  const { images, bigImage, status } = this.state;

  return (
    <div>
       <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} toggleModal={this.toggleModal} />

    </div>
  );
}
};

export default App;