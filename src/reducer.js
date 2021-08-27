export const initialState = {
    globalCount: 0,
    openKey: 0,
    openDetail: false
}

export const actionTypes = {
    CHANGE_COLOR: 'CHANGE_COLOR',
    CHANGE_OPEN_KEY: 'CHANGE_OPEN_KEY',
    CHANGE_OPEN_DETAIL: 'CHANGE_OPEN_DETAIL',
}

const reducer = (state, action) => {
    // console.log('global counter from reducer', action.countValue)
    switch (action.type) {
        case actionTypes.CHANGE_COLOR:
            return {
                ...state,
                globalCount: action.countValue,
            }

        case actionTypes.CHANGE_OPEN_KEY:
            return {
                ...state,
                openKey: action.key,
                openDetail: true
            }

        case actionTypes.CHANGE_OPEN_DETAIL:
            
            return {
                ...state,
                openDetail: !state.openDetail,
            }

        default:
            return state
    }
}

export default reducer
