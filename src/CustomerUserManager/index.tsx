import * as React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { AppRoot } from './AppRoot'

const renderAppContainer = (Component) => {
    return (
        <AppContainer>
            <Component />
        </AppContainer>
    )
}
const App = renderAppContainer(AppRoot)

render(
    App,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./AppRoot', () => {
        const NextAppRoot = require('./AppRoot')['AppRoot']
        const App = renderAppContainer(NextAppRoot)
        render(
            App,
            document.getElementById('root')
        )
    })
}