import React from 'react';
import { search, getAll } from '../api/BooksAPI';
import Book from '../Book/Book';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchPage.css';
export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.updateSingleBook = this.updateSingleBook.bind(this);
        this.state = {
            books: []
        }
    }

    handleChange(event) {
        search(event.target.value).then(async (searchBooks) => {
            let assignedBooks;

            try {
                assignedBooks = await this.assignShelf(searchBooks);

                this.setState({
                    books: assignedBooks
                })

            } catch (err) {
                console.log(`The error is ${err}`)

                this.setState({
                    books: []
                })
                return;
            }
        }).catch(err => console.log(`The error is ${err}`));


    }

    updateSingleBook(id, status) { 
        const books = this.state.books.slice();
        for (let book of books) {
            if (book.id === id) {

                book.shelf = status;
                console.log(book)
            }
        }

        console.log(books);

        this.setState({
            books: books
        })
    }

    assignShelf(searchBooks) {
        return new Promise((resolve, reject) => {

            getAll().then(currBooks => {
                //for each search book compare against all of the current books
                searchBooks.forEach(objS => {
                    objS.shelf = 'none';
                    for (let objC of currBooks) {
                        if (objS.id === objC.id) {
                            objS.shelf = objC.shelf;
                        }
                    }
                })
                resolve(searchBooks);
            }).catch(reason => {

                reject(reason);
            });
        })
    }

    //to get statuses of current books, call get all
    //with getAll response, loop over search books
    // if any searchbooks === response books,
    // add shelf to searchbook with response's shelf status
    // then render books

    render() {
        return (
            <div>
                <Row>
                <Col lg={{span: 6, offset: 3}}>
                <form>
                    <input type="text" onChange={this.handleChange} />
                </form>
                </Col>
               <Col lg={{ span: 10, offset: 1 }}>
                <Row>
                    {
                        this.state.books.length > 0 &&
                        this.state.books.map((book, i) =><Col key={i} lg="4"><Book key={i} book={book} updateSingleBook={this.updateSingleBook} /></Col>)
                    }
                </Row>
                </Col>
                </Row>
            </div>
        )
    }
}