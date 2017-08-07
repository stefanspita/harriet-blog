import R from "ramda"
import consts from "../../../constants"
import bookList from "../../data/books"
import shelveList from "../../data/shelves"

const initialState = {
  books: bookList,
  shelves: shelveList,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case consts.CLICK_BUTTON:
    return R.merge(
      state,
      {buttonClicked: true}
    )
  default:
    return state
  }
}
