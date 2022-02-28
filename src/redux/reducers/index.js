import { ACTION_STRING } from '../actions/actionString'
import { combineReducers } from 'redux'
import authReducer from './auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const reducers = combineReducers({
    auth: authReducer
})

const rootReducer = (state, action) => {
    const { logout } = ACTION_STRING
    if (action.type === logout) {
        AsyncStorage.removeItem('persist:root')
        state = undefined
    }
    return reducers(state, action)
}

export default rootReducer