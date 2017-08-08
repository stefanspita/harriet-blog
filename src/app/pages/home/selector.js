import R from "ramda"

const assignBooksToShelfSlot = R.curry((books, slot) => {
  if (slot.type === "book") {
    const book = R.find(R.propEq("id", slot.id), books)
    return R.assoc("bookDetails", book, slot)
  }
  return slot
})

const assignBooksToShelf = R.curry((books, shelf) => {
  return R.assoc("slots", R.map(assignBooksToShelfSlot(books), shelf.slots), shelf)
})

export default function selector(state) {
  return {
    shelves: R.map(assignBooksToShelf(state.home.books), state.home.shelves),
  }
}
