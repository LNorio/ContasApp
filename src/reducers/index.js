import { combineReducers } from 'redux'
import UserReducer from './UserReducer.js'

export default combineReducers({
    user: UserReducer
})