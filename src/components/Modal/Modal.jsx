import { Component } from 'react';
import css from "./Modal.module.css"

export class Modal extends Component {
    render() {
        return (
            <div className={css.overlay}>
                <div className={css.modal}>
                    <img src={this.props.modalPhoto} alt="" />
                </div>
            </div>
        );
    }
}
