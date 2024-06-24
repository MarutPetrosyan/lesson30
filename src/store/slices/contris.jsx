const Get_All = 'get-all'

const initState = {
    countries: []
}

export const conuntriesReducer = (state = initState, action) => {

    switch (action.type) {
        case Get_All:

            return {
                ...state,
                countries: action.payload
            }

        default:
            return state
    }
}

export const getAllAC = () =>{
    return {type : Get_All, payload : data}
}