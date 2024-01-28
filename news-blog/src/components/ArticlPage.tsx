import { receivArticleID } from "../redux/pages/articles/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { AppStorage } from "../redux/store";
import { useEffect, useState } from "react";
import { Articles } from "../type";
import { Spinner } from "./Spinner";



export const ArticlPage: React.FC = () => {

    const [articlById, setArticlById] = useState<Articles>();

    const { id } = useParams();

    const { articl, articles } = useSelector((store: AppStorage) => store.pages.articles);
    const dispatch = useDispatch();


    useEffect(() => {

        if (articles.length > 0) {
            if (!!id) {
                let articleById = articles.find(item => item.id === +id)
                setArticlById(articleById)
            };
        } else {
            dispatch(receivArticleID({ id }) as any);
        }
    }, [id]);



    return <div className="wrapper" >
        <Spinner />
        <div className="card mb-3">
            <img src={!!articlById ? articlById.image_url : !!articl ? articl.image_url : ""} className="card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title">{!!articlById ? articlById.title : !!articl ? articl.title : ""}</h5>
                <p className="card-text">{!!articlById ? articlById.summary : !!articl ? articl.summary : ""}</p>
                <p className="card-text"><small className="text-body-secondary">{!!articlById ? articlById.published_at.slice(0, 10) : !!articl ? articl.published_at.slice(0, 10) : ""}</small></p>
                <a href={!!articlById ? articlById.url : !!articl ? articl.url : ""} className="btn btn-success float-sm-end" >Go to website</a>
            </div>
        </div>
    </div>


}



