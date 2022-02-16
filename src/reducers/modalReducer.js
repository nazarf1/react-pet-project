const initState = {
    isOpen: false,
}

const modalReducer = (state=initState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: true
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                isOpen: false,
            }
        default:
            return {...state}
    }
}

export default modalReducer