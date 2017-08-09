import R from "ramda"
import consts from "../../../constants"
import bookList from "../../data/books"

const initialState = {
  books: bookList,
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
