import { Component } from 'react';
import css from "./Modal.module.css"

export class Modal extends Component {
    render() {
        console.log(this.props.modalPhoto)
        return (
            <div className={css.overlay}>
                <div className={css.modal}>
                    <img onClick={this.props.onCloseModal} src={this.props.modalPhoto} alt="" />
                </div>
            </div>
        );
    }
}
