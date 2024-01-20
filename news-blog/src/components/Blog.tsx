import { useEffect, useState } from "react"
import { Articl } from "./Articl"
import { Articles } from "../type"
import { blogServise } from "../api/blogService"
import { AppStorage } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { receivArticle } from "../redux/pages/articles/action"
import { Spinner } from "./Spinner"


export const Blog: React.FC = () => {

    const { articles, loadingPin, limit } = useSelector((store: AppStorage) => store.pages.articles)
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(receivArticle({limit:limit}) as any)
    }, [])
    if (loadingPin) { return <Spinner /> }

    return <div className="wrapper__card">
        {articles.map((post) => {
            return <Articl key={post.id} articl={post} />
        })}
    </div>

    
}
// <div>
    //     <p className="d-flex align">
    //         <h1>Posts page</h1>
    //         {loading && <div className="spinner-border" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>}
    //     </p>

    //     <div>
    //         <div className="mb-3">
    //             <label className="form-label">Search</label>
    //             <input type="text" className="form-control" value={inputValue} onChange={(e) => onSearchChange(e.target.value)} />
    //         </div>
    //         <select className="form-select" aria-label="Default select example" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
    //             <option >Select ordering</option>
    //             <option value="text" selected>Text</option>
    //             <option value="data">Data</option>
    //             <option value="lesson_num">Lesson num</option>
    //             <option value="title">Title</option>
    //             <option value="description">Description</option>
    //         </select>
    //     </div>

    //   

    //     <footer className="pagination d-flex justify-content-between align-items-center">
    //         <div>
    //             <button disabled={currentPage === 1} onClick={onPreviousClick} type="button" className="btn btn-primary">Previous</button>
    //         </div>
    //         <div>
    //             <span>Page: {currentPage} of {totalPage}</span>
    //         </div>
    //         <div>
    //             <span>Total: {total}</span>
    //         </div>
    //         <div>
    //             <select value={limit} onChange={e => setLimit(+e.target.value)}>
    //                 <option selected>Select ordering</option>
    //                 <option value="2">2</option>
    //                 <option value="5">5</option>
    //                 <option value="10">10</option>
    //                 <option value="20">20</option>
    //                 <option value="50">50</option>
    //             </select>
    //         </div>
    //         <div>
    //             <button disabled={currentPage === total} onClick={onNextClick} type="button" className="btn btn-primary">Next</button>
    //         </div>
    //     </footer>
    // </div>