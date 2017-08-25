import { FetchUsers, FetchUsersSuccess, createFetchUsersAction, createFetchUsersSuccessAction } from './actions'
import { FECTH_USERS_REQUEST, FECTH_USERS_SUCCESS } from './keys'
import { ajax } from 'jquery'

export const fetchUsersMiddleware = (store) => (next) => (action: FetchUsers&FetchUsersSuccess) => {
    if (action.type == FECTH_USERS_REQUEST) {
       
        const users = []
        for (var i = 0; i < 10; i++) {
            const user = {
                id: i,
                username: `Username_${i}`,
                password: 'moakfhakjf',
                description: '',
                isActive: i % 2 == 0 ? true : false,
                avatar: ''
            }
            users.push(user)
        }
        const action = createFetchUsersSuccessAction(users)
        return next(action)
    }
    return next(action)
}