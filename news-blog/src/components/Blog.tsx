import { useEffect } from "react"
import { Article } from "./Article"
import { AppStorage } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { receivArticle } from "../redux/pages/articles/action"
import { Spinner } from "./Spinner"
import { Pogination } from "./Pogination"
import { useQueryParams, StringParam, NumberParam } from 'use-query-params';





export const Blog: React.FC = () => {

    const { articles, loadingPin, limit, offset } = useSelector((store: AppStorage) => store.pages.articles)
    const dispatch = useDispatch();

    const [query, setQuery] = useQueryParams({
        s: StringParam,
        offset: NumberParam,
        limit: NumberParam,
    });



    useEffect(() => {
        dispatch(receivArticle({ limit: limit, offset: offset }) as any);
        setQuery({ limit: limit, offset: offset })
    }, [limit, offset])





    return <div className="wrapper" >
        < Spinner />
        <div className="wrapper__card">
            {articles.map((articl) => {
                return <Article key={articl.id} articl={articl} />
            })}
        </div>
        <Pogination />
    </div>


}
