import {merge} from "ramda"
import {reducers as homeReducers} from "./pages/home"
import App from "./pages/home"

export const reducers = merge(homeReducers, {})

export default App
