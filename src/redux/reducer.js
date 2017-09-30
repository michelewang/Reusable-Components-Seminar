import { combineReducers } from "redux"
import {
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_CARD,
  DELETE_CARD,
  MOVE_CARD,
  ADD_LIST,
  DELETE_LIST,
  ADD_BOARD,
  DELETE_BOARD
} from "./actions"

const initialState = {
  boards: [],
  user: {},
  nextCardId: 0,
  nextListId: 0,
  visible: false,
  parent: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return Object.assign({}, state, {
        visible: true,
        comp: action.payload.comp,
        parent: action.payload.parent
      })
    }

    case HIDE_MODAL: {
      return Object.assign({}, state, {
        visible: false
      })
    }

    case ADD_BOARD: {
      state.boards.forEach(b => {
        if (b.name === action.payload.name) throw new Error("Boards must have unique names")
      })

      const newBoard = {
        name: action.payload.name,
        lists: []
      }

      return Object.assign({}, state, {
        boards: [...state.boards, newBoard]
      })
    }

    case DELETE_BOARD: {
      let newBoards = state.boards.filter(b => b.name !== action.payload.name)

      return Object.assign({}, state, {
        boards: [...newBoards]
      })
    }

    case ADD_LIST: {
      const newList = {
        id: state.nextListId++,
        title: action.payload.title,
        cards: []
      }

      const newBoards = state.boards.map(b => ({
        ...b,
        lists: b.name === action.payload.boardName ? [...b.lists, newList] : b.lists
      }))

      return Object.assign({}, state, {
        boards: [...newBoards]
      })
    }

    case DELETE_LIST: {
      let newBoards = state.boards.map(b => ({
        ...b,
        lists: b.lists.filter(l => l.id !== action.payload.id)
      }))

      return Object.assign({}, state, {
        boards: [...newBoards]
      })
    }

    case ADD_CARD: {
      const newCard = {
        id: state.nextCardId++,
        text: action.payload.text
      }

      let newBoards = state.boards.map(b => ({
        ...b,
        lists: b.lists.map(l => ({
          ...l,
          cards: l.id === action.payload.listId
            ? [...l.cards, newCard]
            : l.cards
        }))
      }))

      return Object.assign({}, state, {
        boards: [...newBoards]
      })
    }

    case DELETE_CARD: {
      const newBoards = state.boards.map(board => {
        return {
          ...board,
          lists: board.lists.map(list => {
            return {
              ...list,
              cards: list.cards.filter(c => c.id !== action.payload.id)
            }
          })
        }
      })
      return Object.assign({}, state, {
        boards: [...newBoards]
      })
    }

    case MOVE_CARD: {
      let bindex
      let lindex
      let card
      console.log('this is the payload', action.payload)
      let newBoards = state.boards.map((b, bi) => ({
        ...b,
        lists: b.lists.map((l, li) => ({
          ...l,
          cards: l.cards.filter(c => {
            if (c.id === action.payload.id) {
              bindex = bi
              lindex = li
              card = c
              return false
            }
            return true
          })
        }))
      }))
      console.log('this is newBoards', newBoards)
      console.log('here are the data', bindex, lindex)
      if (bindex == null || lindex == null)
        throw new Error("no card with that id")
      if (
        lindex + action.payload.dir < 0 ||
        lindex + action.payload.dir >= state.boards[bindex].lists.length
      ) {
        console.log('look here', state.boards[bindex].lists.length)
        return state
      }

      newBoards[bindex].lists[lindex + action.payload.dir].cards.push(card)

      return Object.assign({}, state, {
        boards: [...newBoards]
      })
    }

    default:
      return state
  }
}
