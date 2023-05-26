import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit'
import loginSlice from './slice'
import storage  from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

const persistConfig = {
    key:"root",
    version:1,
    storage,
}

const reducer = combineReducers({
    isLoggedIn : loginSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer);

//1: store kai andr reducers, humne events store ko denge wo reducer se call krega
//2: wrap whole app in provider in main.jsx
export const store = configureStore({ reducer: {
   reducer: persistedReducer,
   middleware: [thunk]
},

})