import React from 'react'
import Router from './Router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import RootReducer from './reducers'
import reduxThunk from 'redux-thunk'

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

export default ContasApp = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}
