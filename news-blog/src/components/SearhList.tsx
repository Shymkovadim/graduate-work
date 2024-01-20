import { useEffect, useState } from "react"
import { Articl } from "./Articl"

import { AppStorage } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { receivArticle } from "../redux/pages/articles/action"
import { useQueryParams, StringParam, NumberParam } from 'use-query-params';
import { Spinner } from "./Spinner"


export const SearchList: React.FC = () => {

    const { articles, loadingPin, limit, search } = useSelector((store: AppStorage) => store.pages.articles)
    const dispatch = useDispatch();

    const [query, setQuery] = useQueryParams({
        s: StringParam,
        offset: NumberParam,
        limit: NumberParam,
    });
    const { s: searchQuery, offset: offsetNum, limit: limitNum } = query;



    useEffect(() => {

        if (searchQuery) {
            dispatch(receivArticle({ limit: limitNum, search: searchQuery }) as any)
        } else {
            dispatch(receivArticle({ limit: limit, search: search }) as any);
            setQuery({ s: search, limit: limit })
        }
    }, [limit, search])

    if (loadingPin) { return <Spinner /> }

    return <div className="wrapper__card">
        {articles.map((post) => {
            return <Articl key={post.id} articl={post} />
        })}
    </div>
}