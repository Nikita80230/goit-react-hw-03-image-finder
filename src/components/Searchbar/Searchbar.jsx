import { Component } from 'react';
import css from './Searchbar.module.css'

export class Searchbar extends Component {

    state = {
        valueToFind: ""
    }

    onHandleChange = (event) => {

        this.setState({
            valueToFind: event.target.value
        })
    }


    onHandleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.valueToFind)
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form
                    className={css.SearchForm}
                    onSubmit={this.onHandleSubmit}
                >
                    <button

                        className={css.SearchFormButton}
                        type="submit">
                        <span>Search

                        </span>
                    </button>

                    <input
                        onChange={this.onHandleChange}
                        value={this.state.valueToFind}
                        name='input'
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}