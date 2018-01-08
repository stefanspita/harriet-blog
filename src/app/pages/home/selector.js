import {compose, propEq, reduce, toPairs} from "ramda"

function findOpenedBook(accumulator, book) {
  if (propEq("open", true, book[1])) return book[0]
  return accumulator
}

export default function selector(state) {
  return {
    books: state.home.books,
    openedBook: compose(
      reduce(findOpenedBook, undefined),
      toPairs
    )(state.home.books),
  }
}
