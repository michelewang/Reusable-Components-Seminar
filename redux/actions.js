let nextCardId = 0

// declare the action types
export const ADD_CARD = 'ADD_CARD'
export const DELETE_CARD ='DELETE_CARD'
export const MOVE_CARD = 'MOVE_CARD'

export const ADD_LIST = 'ADD_LIST'

export const ADD_BOARD = 'ADD_BOARD'

// action creators
export const addCard = (text, listTitle) => ({
  type: ADD_CARD,
  payload: {
    id: nextCardId++,
    text,
    listTitle,
  },
})

export const addBoard = title => ({type: ADD_BOARD, payload: {title}})
