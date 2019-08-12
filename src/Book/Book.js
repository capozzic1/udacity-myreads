import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Book({ book, getBooks, updateSingleBook}) {
    return (
        
        <div className="book">
            <Row>
            <Col lg={{ span: 6, offset: 3}}>
            <img src={book.imageLinks ? book.imageLinks.thumbnail : "" } alt={book.title} />
            </Col>
            <Col lg="12">
            <h4 className="text-center">{book.title}</h4>
            </Col>
            <Col lg={{ span:8, offset: 1}}>
            <ul className="text-center">
                {   
                    book.authors &&
                    book.authors.map((author, i) => <li key={i}>{author}</li>)
                }
            </ul>
            </Col>
            </Row>
            
            <Dropdown getBooks={getBooks} updateSingleBook={updateSingleBook} book={{ id: book.id, shelf: book.shelf }} />
            </div>
        
    )
}