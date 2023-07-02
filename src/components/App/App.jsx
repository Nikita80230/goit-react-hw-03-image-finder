import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import { Component } from 'react';
import { getData } from '../services/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    photosArray: [],
    isLoading: true,
    searchTerm: '',
    error: null,
    currentPage: 1,
  };

  onSubmit = inputValue => {
    this.setState({
      searchTerm: inputValue,
    });
  };

  onLoadMoreClick = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
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
              : [...prevState.photosArray, response.data.hits],
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
    const { photosArray } = this.state;
    // console.log(this.state.photosArray)
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery photosArray={this.state.photosArray} />
        {photosArray.length !== 0 && (
          <Button onLoadMoreClick={this.onLoadMoreClick} />
        )}
      </div>
    );
  }
}
