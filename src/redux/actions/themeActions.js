export const DARK_THEME = 'DARK_THEME'
export const LIGHT_THEME = 'LIGHT_THEME'

const dark = {
    background: '#3D445E',
    accentOne: '#4EB4B0',
    accentTwo: '#3B8E96',
    white: '#eeeeee',
    black: '#222222'
}

const light = {
    background: '#4EB4B0',
    accentOne: '#3D445E',
    accentTwo: '#3B8E96',
    white: '#eeeeee',
    black: '#222222'
}

export const changeToDarkTheme = () => ({
    type: DARK_THEME,
    payload: dark
})

export const changeToLightTheme = () => ({
    type: LIGHT_THEME,
    payload: light
})
