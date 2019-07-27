import React from 'react';
import Book from '../Book/Book';

export default function BookShelf({ books, getBooks }) {

    const current = books.filter(book => book.shelf === 'currentlyReading').map((book, i) => <li key={i}><Book getBooks={getBooks} book={book} /></li>);
    const wantToRead = books.filter(book => book.shelf === 'wantToRead').map((book, i) => <li key={i}><Book getBooks={getBooks} book={book} /></li>);
    const read = books.filter(book => book.shelf === 'read').map((book, i) => <li key={i}><Book getBooks={getBooks} book={book} /></li>);
    return (
        <div>
            <h2>Currently Reading</h2>
            <ul>
                {current}
            </ul>
            <h2>Want to Read</h2>
            <ul>
                {wantToRead}
            </ul>
            <h2>Read</h2>
            <ul>
                {read}
            </ul>
        </div>
    )
}