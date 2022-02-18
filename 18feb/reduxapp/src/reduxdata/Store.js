import {createStore} from 'redux'
import * as storage from './LocalStorage'

import CartReducer from './reducers/CartReducer'

var stateData = storage.loadState()

const store = createStore(CartReducer,stateData)

store.subscribe(()=>{
    storage.saveState(store.getState())
})

export default store