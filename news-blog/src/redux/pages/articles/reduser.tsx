import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Articles, ArticlesPageStore, PaginatedArticlesList } from "../../../type";
import { changeSearch, receivArticle } from "./action";
import { NULL } from "sass";



const defaultState: ArticlesPageStore = {
    articles: [],
    loadingPin: false,
    offset: 0,
    limit: 12,
    search: null,
}


export const articlesReduser = createReducer<ArticlesPageStore>(defaultState, {
    [receivArticle.pending.type]: (store) => {
        store.loadingPin = true;
    },
    [receivArticle.fulfilled.type]: (store, action: PayloadAction<PaginatedArticlesList>) => {
        store.loadingPin = false;
        store.articles = action.payload.results;

    },
    [changeSearch.type]: (store, action: PayloadAction<string>) => {
        store.search = action.payload
        console.log(store.search)
    }
})