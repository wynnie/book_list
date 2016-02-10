export function selectBook(book) {
    //console.log('A book has been selected: ',book.title);

    // selectBook is an ActionCreator, it needs to return an action
    // an object with a type property
    // Actions always have a type and usually a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
