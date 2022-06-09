import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { applyMiddleware, compose,createStore  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// const store = createStore(
//    reducer,
//    compose(applyMiddleware(thunk),
//       typeof window === 'object' &&
//          typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
//          ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
//    )
// )

const store = configureStore({
   reducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }).concat(thunk),
   devTools: process.env.NODE_ENV !== 'production',
})

export default store;