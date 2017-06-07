// let nextCardId = 0
// let nextListId = 0

// declare the action types
export const ADD_BOARD = "ADD_BOARD"
export const DELETE_BOARD = "DELETE_BOARD"

export const ADD_LIST = "ADD_LIST"
export const DELETE_LIST = "DELETE_LIST"

export const ADD_CARD = "ADD_CARD"
export const DELETE_CARD = "DELETE_CARD"
export const MOVE_CARD = "MOVE_CARD"

// action creators for board
export const addBoard = name => ({ type: ADD_BOARD, payload: { name } })

export const deleteBoard = name => ({ type: DELETE_BOARD, payload: { name } })

// action creators for list
export const addList = (title, boardName) => ({
  type: ADD_LIST,
  payload: {
    title,
    boardName,
  }
})

export const deleteList = id => ({ type: DELETE_LIST, payload: { id } })

// action creators for card
export const addCard = (text, listId) => ({
  type: ADD_CARD,
  payload: {
    text,
    listId
  }
})

export const moveCard = (id, dir) => ({
  type: MOVE_CARD,
  payload: {
    id,
    dir
  }
})

export const deleteCard = id => ({ type: DELETE_CARD, payload: { id } })
