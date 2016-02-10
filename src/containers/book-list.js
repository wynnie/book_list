//curly brace in import means import a single property
import React, {Component} from 'react';
//react-redux is the glue between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book)=> {
            return (
                //For list always have a key, react is more efficient that way
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props inside of BookList, which is the
    //component that is connected by react-redux connect
    return {
        books: state.books
    };
}

//Anything returned from this function ends up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook},dispatch);
}
//connect takes a function and a component and produces a container
//Whenever state changes, BookList is re-rendered
//Export this container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


