const initState = {
    employee: [],
    isLoading: true,
}

const employeeReducer = (state=initState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                employee: action.payload.employee,
                isLoading: false,
            }
        case 'LOADING':
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
    }
}

export default employeeReducer