const INITIAL_STATE = {
    todos: []
};

export function TodoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                todos: action.todos,
            };

        default:
            return state;
    }
}