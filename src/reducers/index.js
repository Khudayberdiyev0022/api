import {combineReducers} from 'redux'

const fetchAllUsers = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL_USERS':
            return action.payload
        default:
            return state
    }
}
const searchUser = (state=[], action) => {
    switch (action.type) {
        case 'SEARCH_USER':
            return action.payload
        default:
            return state
    }
}
const userInformation = (state=[], action) => {
    switch (action.type) {
        case 'USER_INFORMATION':
            return action.payload
        default:
            return state
    }
}


export default combineReducers({
    allUsers: fetchAllUsers,
    searchedUser: searchUser,
    userInform: userInformation
})
