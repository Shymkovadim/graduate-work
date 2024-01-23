import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { articlesReduser } from "./pages/articles/reduser"
import { ArticlesPageStore } from "../type"



export interface AppStorage {
    pages: {
        articles: ArticlesPageStore,
        // search: SearchPageStore,
    }
}

export const store = configureStore<AppStorage>({
    reducer: combineReducers({
        pages: combineReducers({
            articles: articlesReduser,
            // search: searchReducer,

        })
    }),

})


