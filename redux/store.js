import { createStore } from "redux"

import reducer from "./reducer"
import { addBoard } from "./actions"

const store = createStore(reducer)

export default store
