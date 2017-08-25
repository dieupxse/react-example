import * as React from 'react'
import {Provider} from 'react-redux'
import { createStore,applyMiddleware, combineReducers, compose} from 'redux'
import { reducer, fetchUsersMiddleware } from './state'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Switch,Route, withRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const routerMiddleWares = routerMiddleware(history)
const middleWares = compose(fetchUsersMiddleware, routerMiddleWares)
const appReducer = combineReducers({
    customerUserManager: reducer,
    router: routerReducer
})

const store = createStore(appReducer, {}, applyMiddleware(middleWares as any))

const Home = withRouter<any>((props) => {
    return (
        <div>Home dd</div>
    )
})

const About = withRouter<any>((props) => {
    return (
        <div>About</div>
    )
})
const ExtentedConnectedRoute = (props) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component= {About} />
            </Switch>
        </ConnectedRouter>
    )
}

export const AppRoot = (props) => {
    return (
        <Provider store={store}>
            <ExtentedConnectedRoute/>
        </Provider>
    )
}