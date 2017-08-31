import R from "ramda"

function findOpenedBook(accumulator, book) {
  if (R.propEq("open", true, book[1])) return book[0]
  return accumulator
}

export default function selector(state) {
  return {
    books: state.home.books,
    openedBook: R.compose(
      R.reduce(findOpenedBook, undefined),
      R.toPairs
    )(state.home.books),
  }
}
