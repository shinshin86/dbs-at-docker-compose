import { take, put, call, fork } from 'redux-saga/effects'
import { REQUEST_ALL_USER, receiveData, failureData } from '../actions'
import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

export function* handleRequestUsers() {
  while(true) {
    const action = yield take(REQUEST_ALL_USER)
    const data = yield call(fetchAllUser)

    if(data) {
      yield put(receiveData(data))
    } else {
      yield put(failureData())
    }
  }
}

export function fetchAllUser() {
  const url = 'http://localhost:3001/users'
  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error(`ERROR: ${err}`)
      throw new Error('ERROR')
    })
}

export default function* root() {
  yield fork(handleRequestUsers)
}
