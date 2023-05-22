import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cocktailsApi from "./cocktailsApi";
import friendsApi from "./friendsApi";

const store = configureStore({
  reducer: {
    [friendsApi.reducerPath]: friendsApi.reducer,
    [cocktailsApi.reducerPath]: cocktailsApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      //   friendsApi.middleware,
      friendsApi.middleware,
      cocktailsApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
