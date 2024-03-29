import { useDispatch, useSelector } from "react-redux"
import { AppStorage } from "../redux/store"
import { useMemo } from "react"
import { changeLimit, changeOffset } from "../redux/pages/articles/action"



export const Pogination: React.FC = () => {
    const { limit, total, offset } = useSelector((store: AppStorage) => store.pages.articles)
    const dispatch = useDispatch()


    const totalPage = useMemo(() => {
        return Math.ceil(total / limit) || 1
    }, [total, limit]);


    const currentPage = useMemo(() => {
        return Math.floor(offset / limit) + 1
    }, [offset, limit]);


    const onPreviousClick = () => {
        offset > 0 && dispatch(changeOffset(offset - limit));
    };

    const onNextClick = () => {
        offset < limit * (totalPage - 1) && dispatch(changeOffset(offset + limit));
    };

    return <footer className="pagination d-flex justify-content-between align-items-center">
        <div>
            <button disabled={currentPage === 1} onClick={onPreviousClick} type="button" className="btn btn-outline-secondary">Previous</button>
        </div>
        <div>
            <span>Page: {currentPage} of {totalPage}</span>
        </div>
        <div>
            <span>Total: {total}</span>
        </div>
        <div>
            <select className="form-select" value={limit} onChange={e => {

                dispatch(changeLimit(+e.target.value))

            }}>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="48">48</option>
                <option value="60">60</option>
            </select>
        </div>
        <div>
            <button disabled={currentPage === totalPage} onClick={onNextClick} type="button" className="btn btn-outline-secondary">Next</button>
        </div>
    </footer>
}