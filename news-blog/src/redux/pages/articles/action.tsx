import { blogServise } from "../../../api/blogService"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ArticlesProps } from "../../../type";


export const receivArticle = createAsyncThunk('get Article', () => {
    return blogServise.getArticles()
})
export const receivArticleSearch = createAsyncThunk('get Article search', (creds: ArticlesProps) => {
    return blogServise.getArticles(creds)
})