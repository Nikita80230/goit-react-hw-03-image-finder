import { Component } from 'react';

export class ImageGalleryItem extends Component {
    render() {
        const { webformatURL, largeImageURL, onClick } = this.props;
        return (
            <li>
                <img onClick={onClick} src={webformatURL} alt={largeImageURL} />
            </li>
        );
    }
}
