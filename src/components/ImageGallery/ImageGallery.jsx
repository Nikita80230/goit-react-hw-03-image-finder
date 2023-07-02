import { Component } from 'react';
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
    render() {
        const { photosArray } = this.props;
        return (
            <ul className={css.ImageGallery}>
                {photosArray.map(({ id, webformatURL, largeImageURL }) => {
                    return <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
                })}
            </ul>
        )
    }
}
