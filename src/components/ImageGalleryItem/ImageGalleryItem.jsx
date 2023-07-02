import { Component } from "react";

export class ImageGalleryItem extends Component {

    render() {
        const { webformatURL, largeImageURL } = this.props
        return (
            <li>
                <img src={webformatURL} alt={largeImageURL} />
            </li>
        )
    }
}