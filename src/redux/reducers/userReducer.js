import { ADD_USER, REMOVE_USER } from "../actions/userActions";

const initialState = {
    user: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_USER:
        return { ...state, ...payload }
    
    case REMOVE_USER:
        return { ...state, ...payload }
        
    default:
        return state
    }
}
