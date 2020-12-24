const SET_TODOS = 'SET_TODOS';

function todoReducer(state: any, action: any) {
    switch (action.type) {
        case SET_TODOS:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export { todoReducer, SET_TODOS };
