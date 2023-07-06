import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onCloseModal();
        }
    };
    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onCloseModal();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div className={css.overlay} onClick={this.handleOverlayClick}>
                <div className={css.modal}>
                    <img
                        onClick={this.props.onCloseModal}
                        src={this.props.modalPhoto}
                        alt=""
                    />
                </div>
            </div>
        );
    }
}
