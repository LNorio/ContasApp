import React from 'react'
import Router from './Router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import RootReducer from './reducers'
import reduxThunk from 'redux-thunk'

const enhance = composeWithDevTools({
    realtime: true,
    hostname: 'localhost',
    port: 8000,
  });

const store = createStore(RootReducer, enhance(applyMiddleware(reduxThunk)))

export default ContasApp = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}
