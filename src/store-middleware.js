import {createLogger} from "redux-logger"
import {applyMiddleware} from "redux"
import {routerMiddleware} from "react-router-redux"

export default function getStoreMiddleware(history) {
  const middlewares = [routerMiddleware(history)]

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger({collapsed: true}))
  }

  return applyMiddleware(...middlewares)
}
