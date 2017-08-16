import dawnOfTheDumbBack from "./assets/dawn-of-the-dumb-back.jpg"
import dawnOfTheDumbFront from "./assets/dawn-of-the-dumb-front.jpg"
import dawnOfTheDumbRoot from "./assets/dawn-of-the-dumb-root.jpg"
import ourSuperAdventureBack from "./assets/our-super-adventure-back.jpg"
import ourSuperAdventureFront from "./assets/our-super-adventure-front.jpg"
import ourSuperAdventureRoot from "./assets/our-super-adventure-root.jpg"
import theLuminariesBack from "./assets/the-luminaries-back.jpg"
import theLuminariesFront from "./assets/the-luminaries-front.jpg"
import theLuminariesRoot from "./assets/the-luminaries-root.jpg"

const books = {
  "dawn-of-the-dumb": {
    title: "Dawn of the dumb",
    pictures: {back: dawnOfTheDumbBack, front: dawnOfTheDumbFront, root: dawnOfTheDumbRoot},
    size: {spineWidth: 45, height: 250, coverWidth: 180},
  },
  "our-super-adventure": {
    title: "Out super adventure",
    pictures: {back: ourSuperAdventureBack, front: ourSuperAdventureFront, root: ourSuperAdventureRoot},
    size: {spineWidth: 50, height: 180, coverWidth: 180},
  },
  "the-luminaries": {
    title: "The luminaries",
    pictures: {back: theLuminariesBack, front: theLuminariesFront, root: theLuminariesRoot},
    size: {spineWidth: 60, height: 220, coverWidth: 180},
  },
}

export default books
