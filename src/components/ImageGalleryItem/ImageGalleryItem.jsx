import { Component } from 'react';
import css from "./ImageGalleryItem.module.css"

export class ImageGalleryItem extends Component {
    render() {
        const { webformatURL, largeImageURL } = this.props;
        console.log(largeImageURL)
        return (
            <li>
                <img className={css.galleryItemImg} onClick={(largeImageURL) => { this.props.onOpenModal(largeImageURL) }} src={webformatURL} alt={largeImageURL} />
            </li>
        );
    }
}
