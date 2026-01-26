import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../features/api/apiSlice";
import counterReducer from "../features/counters/countersSlice";

// custom middleware
// const myLogger = (store) => (next) => (action) => {
//     console.log(JSON.stringify(action));
//     console.log(JSON.stringify(store.getState()));

//     return next(action);
// };

const store = configureStore({
    reducer: {
        counters: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});

// listener for events like focus/reconnect
// setupListeners(store.dispatch);

export default store;
