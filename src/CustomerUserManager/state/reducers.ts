import * as $ from 'jquery'
import { FetchUsers, FetchUsersSuccess } from './actions'
import { FECTH_USERS_REQUEST, FECTH_USERS_SUCCESS } from './keys'
import {CustomerUser} from '../interfaces'

type Action = FetchUsers & FetchUsersSuccess

interface State {
    users?: Array<CustomerUser>
}
const initState: State = {
    users: []
}

export const reducer = (state = initState, action: Action) => {
    let newState: State = {}
    switch (action.type) {
        case FECTH_USERS_SUCCESS:
            newState = $.extend(true, {}, state)    
            newState.users = action.users   
        return newState
        case FECTH_USERS_REQUEST:
        default:
        return state    
    }
}