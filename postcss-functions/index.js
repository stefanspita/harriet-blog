import getImageSize from "./get-image-size"
import theme from "./theme"

export default {
  functions: {
    getImageSize: getImageSize(theme),
  },
}
