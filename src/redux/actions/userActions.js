export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

export const addUser = (payload) => ({
    type: type,
    payload
})


export function removeUser() {
    return {
        type: REMOVE_USER,
        payload: { user: {} }
    }
}