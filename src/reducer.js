export const initialState = {
    globalCount: 0,
}

export const actionTypes = {
    CHANGE_COLOR: 'CHANGE_COLOR',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_COLOR:
            return {
                ...state,
                globalCount: action.counter,
            }

        default:
            return state
    }
}

export default reducer
