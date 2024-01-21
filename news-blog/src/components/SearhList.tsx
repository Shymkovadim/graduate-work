import { useEffect, useState } from "react"
import { Articl } from "./Articl"

import { AppStorage } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { changeLimit, changeOffset, changeSearch, receivArticle } from "../redux/pages/articles/action"
import { useQueryParams, StringParam, NumberParam } from 'use-query-params';
import { Spinner } from "./Spinner"
import { Footer } from "./Footer"


export const SearchList: React.FC = () => {

    const { articles, loadingPin, limit, search, offset } = useSelector((store: AppStorage) => store.pages.articles)
    const dispatch = useDispatch();

    const [query, setQuery] = useQueryParams({
        s: StringParam,
        offset: NumberParam,
        limit: NumberParam,
    });
    const { s: searchQuery, offset: offsetNum, limit: limitNum } = query;




    useEffect(() => {
        if (!!searchQuery) {
            console.log(!!searchQuery)
            dispatch(receivArticle({ limit: limitNum, search: searchQuery, offset: offsetNum }) as any);
            dispatch(changeSearch(searchQuery))
            if (limitNum) { dispatch(changeLimit(limitNum)) }
            if (offsetNum) { dispatch(changeOffset(offsetNum)) }
        }
        setQuery({ s: search, limit: limit, offset: offset })
    }, [searchQuery, limitNum, offsetNum])

    useEffect(() => {
        dispatch(receivArticle({ limit: limit, search: search, offset: offset }) as any);
        setQuery({ s: search, limit: limit, offset: offset })
    }, [limit, search, offset])


    if (loadingPin) { return <Spinner /> }

    return <div className="wrapper__card">
        {articles.map((post) => {
            return <Articl key={post.id} articl={post} />
        })}
        <Footer />
    </div>
}