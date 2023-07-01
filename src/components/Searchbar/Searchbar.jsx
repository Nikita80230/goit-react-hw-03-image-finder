import { Component } from 'react';
import css from './Searchbar.module.css'

export class Searchbar extends Component {

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm}>
                    <button
                        className={css.SearchFormButton}
                        type="submit">
                        <span>Search

                        </span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}