import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Articles, ArticlesPageStore, PaginatedArticlesList } from "../../../type";
import { receivArticle } from "./action";



const defaultState: ArticlesPageStore = {
    articles: [],
    loadingPin: false,
}


export const articlesReduser = createReducer<ArticlesPageStore>(defaultState, {
    [receivArticle.pending.type]: (store) => {
        store.loadingPin = true;
    },
    [receivArticle.fulfilled.type]: (store, action: PayloadAction<PaginatedArticlesList>) => {
        store.loadingPin = false;
        store.articles = action.payload.results;

    },
})