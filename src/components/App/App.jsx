import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import { Component } from 'react';
import { getData } from '../services/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    photosArray: [],
    isLoading: false,
    searchTerm: '',
    error: null,
    currentPage: 1,
    modal: { isOpen: false, modalPhoto: '' },
  };

  onSubmit = inputValue => {
    this.setState({
      searchTerm: inputValue,
      photosArray: [],
      currentPage: 1,
    });
  };

  onLoadMoreClick = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  onOpenModal = img => {
    console.log(img);
    this.setState({
      modal: {
        isOpen: true,
        modalPhoto: img,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modalPhoto: null,
      },
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.searchTerm !== this.state.searchTerm
    ) {
      this.setState({ isLoading: true });

      try {
        const response = await getData(
          this.state.searchTerm,
          this.state.currentPage
        );
        this.setState(prevState => ({
          photosArray:
            this.state.currentPage === 1
              ? response.data.hits
              : [...prevState.photosArray, ...response.data.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  async componentDidMount() { }

  render() {
    const { photosArray, isLoading, modal } = this.state;
    // console.log(this.state.photosArray)
    // const instance = basicLightbox.create(`<div>
    //             <div>

    //                 img src="${this.state.modal.modalPhoto}" width="800" height="600">
    //             </div>
    //         </div>`);
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          photosArray={this.state.photosArray}
          onOpenModal={this.onOpenModal}
        />
        {isLoading && <Loader />}
        {photosArray.length !== 0 && (
          <Button onLoadMoreClick={this.onLoadMoreClick} />
        )}
        {modal.isOpen && (
          <Modal
            modalPhoto={modal.modalPhoto}
            onCloseModal={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}
