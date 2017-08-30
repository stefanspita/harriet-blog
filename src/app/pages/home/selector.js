import R from "ramda"

export default function selector(state) {
  return {
    books: state.home.books,
    bookIsOpen: !!R.find(R.propEq("open", true), R.values(state.home.books)),
  }
}
