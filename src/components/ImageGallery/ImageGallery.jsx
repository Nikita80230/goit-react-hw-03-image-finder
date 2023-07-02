import { Component } from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
    render() {
        const { photosArray } = this.props;

        return (
            <ul className={css.ImageGallery}>
                {Array.isArray(photosArray) &&
                    photosArray.map(({ id, webformatURL, largeImageURL }) => {
                        return (
                            <ImageGalleryItem
                                onClick={largeImageURL => {
                                    this.props.onOpenModal(largeImageURL);
                                }}
                                key={id}
                                webformatURL={webformatURL}
                                largeImageURL={largeImageURL}
                            />
                        );
                    })}
            </ul>
        );
    }
}