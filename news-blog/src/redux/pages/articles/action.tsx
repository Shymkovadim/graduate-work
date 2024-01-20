import { blogServise } from "../../../api/blogService"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ArticlesProps } from "../../../type";


export const receivArticle = createAsyncThunk('get Article', (creds: ArticlesProps) => {
    return blogServise.getArticles(creds)
})
export const changeSearch = createAction<string>('change language')