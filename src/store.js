import { createStore, applyMiddleware } from 'redux'
import app from './reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(app, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(dataSaga)
  
export default store
