import { ArticleProps, Articles } from "../type"



export const Articl: React.FC<ArticleProps> = ({ articl }) => {
    return <div className="card" >
        <img src={articl.image_url} className="card-img-top card__img" alt="..." />
        <div className="card-body">
            <p className="">{articl.published_at.slice(0, 10)}</p>
            <h5 className="card-title">{articl.title}</h5>
        </div>
    </div>
}