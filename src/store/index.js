import { configureStore } from "@reduxjs/toolkit";
import { suggApi } from "./apis/suggApi";
import { journeysApi, useLazyFetchJourneysQuery } from "./apis/journeysApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { formReducer } from "./slices/formSlice";
import { journeysReducer } from "./slices/journeysSlice";

export const store = configureStore({
    reducer: {
        [suggApi.reducerPath] : suggApi.reducer,
        [journeysApi.reducerPath] : journeysApi.reducer,
        form: formReducer,
        journeysMap: journeysReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(suggApi.middleware)
        .concat(journeysApi.middleware);
    }
});

setupListeners(store.dispatch);

export {useLazyFetchSuggsQuery} from './apis/suggApi';
export {useLazyFetchJourneysQuery} from './apis/journeysApi';
export {changeArrival, changeDeparture, changeDatetime, changeRepresents} from './slices/formSlice'
export {changeCurrentId, changeCurrentDetails, changeCurrentSection, addGeo} from './slices/journeysSlice'