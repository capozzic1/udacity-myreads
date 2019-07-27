import React ,{ Component } from 'react';
import { getAll } from '../api/BooksAPI';
import BookShelf from '../BookShelf/BookShelf';

export default class MainPage extends Component {
    state = {
        books: []
    }

    componentDidMount() {
      this.getBooks();
    }

    getBooks() {
        getAll().then(books => {
            this.setState({ books: books });
        })
    }

    render() {
        return (
        <BookShelf books={this.state.books} getBooks={this.getBooks.bind(this)}/>
        );
    }
}