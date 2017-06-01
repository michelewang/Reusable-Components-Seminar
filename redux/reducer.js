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
        name: action.payload.title,
        lists: [
          {
            title: 'list1',
            cards: [{ text: 'text1', id: '1' }, { text: 'text2', id: '2' }],
          },
          {
            title: 'list2',
            cards: [{ text: 'text3', id: '3' }, { text: 'text4', id: '4' }],
          },
        ],
      }
      console.log('adding board')
      return Object.assign({}, state, {
        boards: [...state.boards, newBoard]
      })
    }

    case DELETE_CARD: {
        console.log(state)
        const newBoards = state.boards.map(board => {
            board.lists.map(list => {
                list.cards.filter(c => c.id !== action.payload.id)
            })
        })
        console.log(newBoards)
        return Object.assign({}, state, {
            boards: [...newBoards]
        })
    }

    default:
      return state
  }
}
