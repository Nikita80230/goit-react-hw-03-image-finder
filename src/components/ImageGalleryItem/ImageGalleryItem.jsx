import { Component } from 'react';
import css from "./ImageGalleryItem.module.css"

export class ImageGalleryItem extends Component {
    render() {
        const { webformatURL, largeImageURL } = this.props;

        return (
            <li>
                <img className={css.galleryItemImg} onClick={() => { this.props.onOpenModal(largeImageURL) }} src={webformatURL} alt={largeImageURL} />
            </li>
        );
    }
}
