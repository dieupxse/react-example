import { FetchUsers, FetchUsersSuccess, createFetchUsersAction, createFetchUsersSuccessAction } from './actions'
import { FECTH_USERS_REQUEST, FECTH_USERS_SUCCESS } from './keys'
import { ajax } from 'jquery'

export const fetchUsersMiddleware = (store) => (next) => (action: FetchUsers&FetchUsersSuccess) => {
    if (action.type == FECTH_USERS_REQUEST) {
        ajax({
            url: action.url,
            success: (users) => {
                const action = createFetchUsersSuccessAction(users)
                store.dispatch(action)
            }
        })
    }
    return next(action)
}