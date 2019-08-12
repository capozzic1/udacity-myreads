import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { update } from '../api/BooksAPI';
import './Dropdown.css';

export default function Dropdown({ book, getBooks, updateSingleBook }) {


    const updateBook = (book, newStatus) => {
        console.log(book)
        const b = { id: book.id };

        update(b, newStatus).then(val => {

            if (updateSingleBook) {
                console.log('updatesingle')
                updateSingleBook(b.id, newStatus);
            }

            if (getBooks) {
                getBooks()
            }
            return;
        });
    }

    return (
        <div>
            <h2>Move to...</h2>
            <ul>
            <span>{book.shelf === 'currentlyReading' && <FaCheck />}</span><li onClick={() => { updateBook(book, 'currentlyReading') }}>Currently Reading</li>
            <span>{book.shelf === 'wantToRead' && <FaCheck />}</span><li onClick={() => { updateBook(book, 'wantToRead') }}>Want to Read</li>
            <span>{book.shelf === 'read' && <FaCheck />}</span><li onClick={() => { updateBook(book, 'read')}}>Read</li>
            <span>{book.shelf === 'none' && <FaCheck />}</span><li onClick={() => { updateBook(book, 'none')}}>None</li>
            </ul>
        </div>
    )
}