import { useEffect, useState } from "react"
import { Articl } from "./Articl"

import { AppStorage } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { receivArticle, receivArticleSearch } from "../redux/pages/articles/action"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

export const SearchList: React.FC = () => {

    const { articles, loadingPin } = useSelector((store: AppStorage) => store.pages.articles)
    const dispatch = useDispatch();
    let navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    let search = window.location.search
    if (search) {
        console.log(search.split("=")[1])
    }
    useEffect(() => {
        dispatch(receivArticleSearch({}) as any)

    }, [])
    if (loadingPin) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return <div className="wrapper__card">
        {articles.map((post) => {

            return <Articl key={post.id} articl={post} />
        })}
    </div>
}