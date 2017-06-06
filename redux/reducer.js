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
            id: 0,
            cards: [],
          },
          {
            title: 'list2',
            id: 1,
            cards: [],
          },
        ],
      }
      return Object.assign({}, state, {
        boards: [...state.boards, newBoard]
      })
    }

    case ADD_CARD: {
        const newCard = {
            id: action.payload.id,
            text: action.payload.text,
        }

        let newBoards = state.boards.map(b => ({
            ...b,
            lists: b.lists.map(l => ({
                ...l,
                cards: l.id === action.payload.listId ? [newCard, ...l.cards] : l.cards
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
                lists: (board.lists.map(list => {
                    return {
                        ...list,
                        cards: list.cards.filter(c => c.id !== action.payload.id)
                    }
                }))
            }
        })
        return Object.assign({}, state, {
            boards: [...newBoards]
        })
    }

    case MOVE_CARD: {
        let bindex;
        let lindex;
        let card;
        let newBoards = state.boards.map((b, bi) => ({
            ...b,
            lists: b.lists.map((l, li) => ({
                ...l,
                cards: l.cards.filter(c => {
                    if (c.id === action.payload.id) {
                        bindex = bi;
                        lindex = li;
                        card = c;
                        return false;
                    }
                    return true;
                })
            }))
        }))

        if (bindex == null || lindex == null) throw new Error('no card with that id');
        if (lindex + action.payload.dir < 0 || lindex + action.payload.dir >= state.boards[bindex].lists.length) {
            return state;
        }

        newBoards[bindex].lists[lindex + action.payload.dir].cards.push(card);

        return Object.assign({}, state, {
            boards: [...newBoards]
        })
    }

    default:
      return state
  }
}
