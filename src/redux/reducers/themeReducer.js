import { DARK_THEME, LIGHT_THEME } from "../actions/themeActions";

const initialState = {
    background: '#3D445E',
    accentOne: '#4EB4B0',
    accentTwo: '#3B8E96',
    white: '#eeeeee',
    black: '#222222'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case DARK_THEME:
            return { ...state, ...payload }

        case LIGHT_THEME:
            return { ...state, ...payload }

        default:
            return state
    }
}
