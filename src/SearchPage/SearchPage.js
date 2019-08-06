import React from 'react';
import { search, getAll } from '../api/BooksAPI';
import Book from '../Book/Book';

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            books: []
        }
    }

    handleChange(event) {
        search(event.target.value).then(async (searchBooks) => {
            let assignedBooks;

            try {
                assignedBooks = await this.assignShelf(searchBooks);
                console.log(assignedBooks);

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

    assignShelf(searchBooks) {
        return new Promise((resolve, reject) => {
            
            getAll().then(currBooks => {
                //for each search book compare against all of the current books
                searchBooks.forEach(objS => {
                    objS.shelf = 'None';
                    for (let objC of currBooks) {
                        if (objS.id === objC.id) {
                            console.log('match', objS.id, objS.title);
                            objS.shelf = objC.shelf;
                            console.log(objS)
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
                <form>
                    <input type="text" onChange={this.handleChange} />
                </form>
                <ul>
                    {
                        this.state.books.length > 0 &&
                        this.state.books.map((book, i) => <li><Book key={i} book={book} /></li>)
                    }
                </ul>

            </div>
        )
    }
}