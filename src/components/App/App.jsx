import { Searchbar } from 'components/Searchbar/Searchbar';
import css from './App.module.css'
import { Component } from 'react';
import { getData } from '../services/api'
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {

  state = {
    photosArray: [],
    isLoading: true,
    inputValue: "",
    error: null,
    currentPage: 1
  }

  onSubmit = (inputValue) => {
    this.setState({
      inputValue: inputValue,
    })
  }

  onLoadMoreClick = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.setState({ isLoading: true });

      try {
        const response = await getData(this.state.inputValue, this.state.currentPage);
        this.setState(prevState => ({ photosArray: [...prevState.photosArray, response.data.hits] }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }


    if (prevState.inputValue !== this.state.inputValue) {
      this.setState({ isLoading: true });

      try {
        const response = await getData(this.state.inputValue, this.state.currentPage);
        this.setState({ photosArray: response.data.hits });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await getData(this.state.inputValue);
      this.setState({ photosArray: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading } = this.state.isLoading;
    // console.log(this.state.photosArray)
    return (
      <div
        className={css.App}
      >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery photosArray={this.state.photosArray} />
        {!isLoading && < Button onLoadMoreClick={this.onLoadMoreClick} />}
      </div>
    );
  }
};
