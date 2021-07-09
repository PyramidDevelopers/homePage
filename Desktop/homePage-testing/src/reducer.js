export const initialState = {
    globalCount: 0,
}

export const actionTypes = {
    CHANGE_COLOR: 'CHANGE_COLOR',
}

const reducer = (state, action) => {
    // console.log('global counter from reducer', action.countValue)
    switch (action.type) {
        case actionTypes.CHANGE_COLOR:
            return {
                ...state,
                globalCount: action.countValue,
            }

        default:
            return state
    }
}

export default reducer
