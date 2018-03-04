import reducer from "./reducer"
import {connect} from "react-redux"
import actions from "./actions"
import selector from "./selector"
import Home from "./components/home"

const VisibleTodoList = connect(
  selector,
  actions
)(Home)

export default VisibleTodoList

export const reducers = {
  home: reducer,
}
