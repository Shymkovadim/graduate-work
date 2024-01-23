import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Articles, ArticlesPageStore, PaginatedArticlesList } from "../../../type";
import { changeLimit, changeOffset, changeSearch, receivArticle, receivArticleID } from "./action";


const defaultState: ArticlesPageStore = {
    articles: [],
    loadingPin: false,
    offset: 0,
    limit: 12,
    search: null,
    total: 0,
    articl: null
}


export const articlesReduser = createReducer<ArticlesPageStore>(defaultState, {
    [receivArticle.pending.type]: (store) => {
        store.loadingPin = true;
    },
    [receivArticle.fulfilled.type]: (store, action: PayloadAction<PaginatedArticlesList>) => {
        store.loadingPin = false;
        store.articles = action.payload.results;
        store.total = action.payload.count;
    },
    [changeSearch.type]: (store, action: PayloadAction<string>) => {
        store.search = action.payload

    },
    [changeLimit.type]: (store, action: PayloadAction<number>) => {
        store.limit = action.payload
        console.log(store.limit)
    },
    [changeOffset.type]: (store, action: PayloadAction<number>) => {
        store.offset = action.payload

    },
    [receivArticleID.pending.type]: (store) => {
        store.loadingPin = true;
    },
    [receivArticleID.fulfilled.type]: (store, action: PayloadAction<Articles>) => {
        store.loadingPin = false;
        store.articl = action.payload;

    },
})