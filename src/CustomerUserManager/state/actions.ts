import { Action } from 'redux'
import {FECTH_USERS_REQUEST, FECTH_USERS_SUCCESS} from './keys'
import { CustomerUser } from '../interfaces'


export interface FetchUsers extends Action {
    url: string
}
export interface FetchUsersSuccess extends Action {
    users:Array<CustomerUser>
}

export const createFetchUsersAction = (url: string): FetchUsers => ({
    type: FECTH_USERS_REQUEST,
    url
})
export const createFetchUsersSuccessAction = (users: Array<CustomerUser>): FetchUsersSuccess => ({
    type: FECTH_USERS_SUCCESS,
    users
})
