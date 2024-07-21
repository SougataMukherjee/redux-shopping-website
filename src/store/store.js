import {configureStore,combineReducers} from '@reduxjs/toolkit'
import cartReducer from './cardSlice'
import storage from "redux-persist/lib/storage"
import {persistReducer} from 'redux-persist'
// const persistConfig={
//     key:'root',
//     version:1,
//     storage
// }
// const reducer=combineReducers({
//     cart:cartReducer
// })
// const persistedReducer=persistReducer(persistConfig,reducer)
const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default store