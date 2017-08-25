import * as React from 'react'
import { ContentLayout } from '../Layouts'
import { connect } from 'react-redux'
import { CustomerUser } from '../interfaces'
import {push} from 'react-router-redux'
const getDetailPropsFromStore = (state, ownProps) => {
    const { match } = ownProps
    console.log(state,ownProps)
    return {
        user: (state.customerUserManager.users as Array<CustomerUser>).find((o)=> o.id == match.params.id)
    }   
}
@(connect(getDetailPropsFromStore) as any)
export class Detail extends React.Component<any> {
    constructor(props) {
        super(props)

    }
    render() {
        const { user } = this.props
        if (!user)
            return null
        
        return (
            <ContentLayout>
                <div>{
                user.username
                }</div>
            </ContentLayout>
        )
    }
}