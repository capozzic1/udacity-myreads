import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { update } from '../api/BooksAPI';

export default function Dropdown({ book, getBooks }) {

    const updateBook = (book, newStatus) => {
        console.log(book)
        const b = { id: book.id };

        update(b, newStatus).then(val => getBooks());
    }

    return (
        <div>
            <h2>Move to...</h2>
            <ul>
                {book.shelf === 'currentlyReading' && <FaCheck />}<li onClick={() => { updateBook(book, 'currentlyReading') }}>Currently Reading</li>
                {book.shelf === 'wantToRead' && <FaCheck />}<li onClick={() => { updateBook(book, 'wantToRead') }}>Want to Read</li>
                {book.shelf === 'read' && <FaCheck />}<li>Read</li>
                {book.shelf === 'undefined' && <FaCheck />}<li>None</li>
            </ul>
        </div>
    )
}