import React from 'react';
import Book from '../Book/Book';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BookShelf.css';


export default function BookShelf({ books, getBooks }) {

    const current = books.filter(book => book.shelf === 'currentlyReading').map((book, i) => <Col key={i} lg="3"><li key={i}><Book getBooks={getBooks} book={book} /></li></Col>);
    const wantToRead = books.filter(book => book.shelf === 'wantToRead').map((book, i) => <Col key={i} lg="3"><li key={i}><Book getBooks={getBooks} book={book} /></li></Col>);
    const read = books.filter(book => book.shelf === 'read').map((book, i) => <Col key={i} lg="3"><li key={i}><Book getBooks={getBooks} book={book} /></li></Col>);

    return (
        <div>

            <h2>Currently Reading</h2>
            <ul>
                <Row>
                    {current}
                </Row>
            </ul>

            <h2>Want to Read</h2>
            <ul>
                <Row>
                    {wantToRead}
                </Row>
            </ul>
            <h2>Read</h2>
            <ul>
                <Row>
                    {read}
                </Row>
            </ul>
        </div>
    )
}