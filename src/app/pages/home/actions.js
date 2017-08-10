import consts from "../../../constants"

function openBook(id) {
  return {
    type: consts.OPEN_BOOK,
    payload: {id},
  }
}

export default function actions(dispatch) {
  return {
    openBook: (id) => {
      dispatch(openBook(id))
    },
  }
}
