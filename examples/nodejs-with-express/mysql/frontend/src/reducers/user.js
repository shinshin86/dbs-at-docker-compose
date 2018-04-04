import { REQUEST_ALL_USER, RECEIVE_DATA, FAILURE_DATA } from '../actions'

const initial = {
  data: {
    isFetching: false,
    data: [],
  },
};


export default function userManager(
  state=initial.data,
  action
) {
  switch (action.type) {
    case REQUEST_ALL_USER:
      return { ...state, isFetching: true }
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FAILURE_DATA:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}
