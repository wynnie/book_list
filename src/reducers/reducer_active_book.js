//State argument is not application state, only the state this reducer
//is responsible for
export default function (state = null,action) {
    //Redux does not allow returing undefined, therefore default is null for state 
    //Always return a fresh object, do not mutate incoming state
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
