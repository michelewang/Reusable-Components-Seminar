import {combineReducers} from 'redux'
import {ADD_CARD, DELETE_CARD, MOVE_CARD, ADD_LIST, ADD_BOARD} from './actions'

const initialState = {
  boards: [],
  user: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      const newBoard = {
        title: action.payload.title,
        lists: [],
      }
      console.log('adding board')
      return Object.assign({}, state, {
        boards: [...state.boards, newBoard]
      })
    }
    default:
      return state
  }
}
