import { Link } from "react-router-dom"
import { ArticleProps } from "../type"



export const Article: React.FC<ArticleProps> = ({ articl }) => {
    return <div className="card card__wrapper" ><Link to={`/${articl.id}`}>
        <img src={articl.image_url} className="card-img-top card__img" alt="..." />
        <div className="card-body">
            <p className="card-text"><small className="text-body-secondary">{articl.published_at.slice(0, 10)}</small><small className="text-body-secondary float-sm-end">{articl.news_site}</small></p>
            <h5 className="card-title">{articl.title}</h5>
        </div></Link>

    </div>
}