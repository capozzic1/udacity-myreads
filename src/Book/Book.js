import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

export default function Book({ book, getBooks }) {
    return (
        <div>
            <img src={book.imageLinks ? book.imageLinks.thumbnail : "" } alt={book.title} />
            <h1>{book.title}</h1>
            <ul>
                {   book.authors &&
                    book.authors.map((author, i) => <li key={i}>{author}</li>)
                }
            </ul>
            <Dropdown getBooks={getBooks} book={{ id: book.id, shelf: book.shelf }} />
        </div>
    )
}