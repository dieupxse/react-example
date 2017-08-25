import * as React from 'react'
import {connect} from 'react-redux'
import { DefaultLayout } from '../Layouts'
import { createFetchUsersAction } from '../state'
import { NavLink } from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
        users: state.customerUserManager.users
    }
}

@(connect(mapStateToProps) as any)

export class Home extends React.Component<any> {
    constructor(props) {
        super(props)
        const fetchUserAction = createFetchUsersAction("")
        props.dispatch(fetchUserAction)
    }
    render() {
        const {users} = this.props
        return (
            <DefaultLayout>
                <div>
                    <table style={{border: '1px solid #ddd', width: '100%'}} >
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>UserName</td>
                                <td>Password</td>
                                <td>Description</td>
                                <td>IsActive</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length && users.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>
                                                <NavLink className="" id="" activeClassName="active" to={`/detail/${user.id}`}>{user.username}</NavLink>
                                                </td>
                                            <td>{user.password}</td>
                                            <td>{user.description}</td>
                                            <td>{user.isActive}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                </div>
            </DefaultLayout>
        )
    }
}

