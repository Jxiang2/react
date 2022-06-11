const { createStore, bindActionCreators, combineReducers, applyMiddleware } = require("redux")
const { createLogger } = require("redux-logger")

// initial substates
const initialCakeState = { numOfCakes: 10, }
const initialIceCreamState = { numOfIceCreams: 20, }

// action names
const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

// action creator functions that return an action object
function orderCake () {
  return {
    type: CAKE_ORDERED,
  }
}

function restockCake (qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty
  }
}

function orderIceCream () {
  return {
    type: ICECREAM_ORDERED,
  }
}

function restockIceCream (qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty
  }
}

// action subReducers
// subReducers can respond to ALL action types
// but they can only update their specialized states
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 }
    case CAKE_RESTOCKED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload }
    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 }
    case ICECREAM_RESTOCKED:
      return { ...state, numOfIceCreams: state.numOfIceCreams + action.payload }
    case CAKE_ORDERED:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 }
    default:
      return state
  }
}

/**
 * configure store
 * type store = {
 *  dispatch: Function; ({type: string, payload: any}) => state updated
 *  getState: Function; () => an object of state
 *  subScribe: Function; (callback) => any
 * }
 */
const rootReducer = combineReducers({
  // when dispatch an action, all reducers receive it. Only one will have a matched action name and excute the action
  cake: cakeReducer, // state.cake.numOfCakes
  iceCream: iceCreamReducer, // state.cake.numOfIceCreams
})
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(logger))

// store has a single object representing state
console.log("initial state: ", store.getState())

// register listners on dispatch
const unsub = store.subscribe(() => {})

// 2 ways to dispatch an action, which updates the state accroding to it's reducer
const actions = bindActionCreators({
  orderCake,
  orderIceCream,
}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
store.dispatch(restockCake(3))

actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
store.dispatch(restockIceCream(3))

// unregister listners on dispatch
unsub()












