import { useEffect, useState } from "react"
import { Articl } from "./Articl"
import { Articles } from "../type"
import { blogServise } from "../api/blogService"
import { AppStorage } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { receivArticle } from "../redux/pages/articles/action"
import { Spinner } from "./Spinner"
import { Footer } from "./Footer"
import { useQueryParams, StringParam, NumberParam } from 'use-query-params';

export const Blog: React.FC = () => {

    const { articles, loadingPin, limit, offset } = useSelector((store: AppStorage) => store.pages.articles)
    const dispatch = useDispatch();

    const [query, setQuery] = useQueryParams({
        s: StringParam,
        offset: NumberParam,
        limit: NumberParam,
    });
    const { s: searchQuery, offset: offsetNum, limit: limitNum } = query;


    useEffect(() => {


        dispatch(receivArticle({ limit: limit, offset: offset }) as any);
        setQuery({ limit: limit, offset: offset })


    }, [limit, offset])



    if (loadingPin) { return <Spinner /> }

    return <div className="wrapper__card">
        {articles.map((articl) => {
            return <Articl key={articl.id} articl={articl} />
        })}
        <Footer />
    </div>


}
