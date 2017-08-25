import * as React from 'react'
import {Provider} from 'react-redux'
import { createStore,applyMiddleware, combineReducers, compose} from 'redux'
import { reducer, fetchUsersMiddleware } from './state'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Switch,Route, withRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Home, Detail } from './views'

const history = createBrowserHistory()
const routerMiddleWares = routerMiddleware(history)
const middleWares = compose(fetchUsersMiddleware, routerMiddleWares)
const appReducer = combineReducers({
    customerUserManager: reducer,
    router: routerReducer
})

const store = createStore(appReducer, {}, applyMiddleware(middleWares as any))


const ExtentedConnectedRoute = (props) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details" component={Detail} />
                <Route path="/" component= {Detail} />
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