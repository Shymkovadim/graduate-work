import { useSelector } from "react-redux";
import { AppStorage } from "../redux/store";

export const Spinner: React.FC = () => {
    const { loadingPin } = useSelector((store: AppStorage) => store.pages.articles);
    if (!loadingPin) { return <div></div> }
    return <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
}
