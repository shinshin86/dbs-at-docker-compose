export const REQUEST_ALL_USER = 'REQUEST_ALL_USER'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FAILURE_DATA = 'FAILURE_DATA'


export function requestAllUser(data) {
  return {
    type: REQUEST_ALL_USER
  }
}

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  }
}

export function failureData() {
  return {
    type: FAILURE_DATA
  }
}

