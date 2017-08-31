import R from "ramda"
import consts from "../../../constants"
import bookList from "../../data/books"

const initialState = {
  books: bookList,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case consts.OPEN_BOOK: {
    const {id} = action.payload
    return R.assocPath(["books", id, "open"], true, state)
  }

  case consts.CLOSE_BOOK: {
    const {id} = action.payload
    return R.assocPath(["books", id, "open"], false, state)
  }
  default:
    return state
  }
}
