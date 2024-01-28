import { useEffect } from "react"
import { Article } from "./Article"
import { AppStorage } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { changeLimit, changeOffset, changeSearch, receivArticle } from "../redux/pages/articles/action"
import { useQueryParams, StringParam, NumberParam } from 'use-query-params';
import { Spinner } from "./Spinner"
import { Pogination } from "./Pogination"


export const SearchList: React.FC = () => {

    const { articles, limit, search, offset } = useSelector((store: AppStorage) => store.pages.articles);

    const dispatch = useDispatch();

    const [query, setQuery] = useQueryParams({
        s: StringParam,
        offset: NumberParam,
        limit: NumberParam,
    });
    const { s: searchQuery, offset: offsetNum, limit: limitNum } = query;

    useEffect(() => {
        if (!!search) {
            dispatch(receivArticle({ limit: limit, search: search, offset: offset }) as any);
        } else {
            dispatch(receivArticle({ limit: limitNum, search: searchQuery, offset: offsetNum }) as any);
            if (searchQuery) dispatch(changeSearch(searchQuery))
            if (limitNum) { dispatch(changeLimit(limitNum)) }
            if (offsetNum) { dispatch(changeOffset(offsetNum)) }
        }
        setQuery({ s: search, limit: limit, offset: offset })
    }, [limit, search, offset])




    return <div className="wrapper" >
        <Spinner />
        <div className="wrapper__card">
            {articles.map((post) => {
                return <Article key={post.id} articl={post} />
            })}
        </div>
        <Pogination />
    </div>
}