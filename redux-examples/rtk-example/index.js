const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('initial state: ', store.getState())

const unsub = store.subscribe(() => {
  console.log('Updated state', store.getState())
})

store.dispatch(fetchUsers())

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

console.log('############################################################################')

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(3))