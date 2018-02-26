import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { put, takeEvery } from 'redux-saga/effects'

import { appDataSagaWatcher } from './models/appData'

function* rootSaga () {
  yield [
    ...appDataSagaWatcher
  ]
}

export default rootSaga
