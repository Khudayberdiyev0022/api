import github from '../API/github'

export const fetchAll = () => async dispatch => {
        const response = await github.get('/users')
        dispatch({
            type: 'FETCH_ALL_USERS',
            payload: response.data
        })
    }
export const searchUser = (userName) => async dispatch => {
    const response = await github.get(`/users/${userName}`)
    dispatch({
        type: 'SEARCH_USER',
        payload: response.data
    })
}
export const userInformation = (userName) => async dispatch => {
    const response = await github.get(`/users/${userName}`)
    dispatch({
        type: 'USER_INFORMATION',
        payload: response.data
    })
}