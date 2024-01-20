import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { changeSearch } from "../redux/pages/articles/action";


export const Header: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return <div className="d-flex  mb-3 justify-content-between">

        <Link to={'/вавав'}>LOGO</Link>

        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="Title.." onChange={(event: any) => { setValue(event.target.value); }} onKeyDown={(event: any) => {
                if (event.key === 'Enter') {
                    if (value) {
                        dispatch(changeSearch(value) as any)
                    }
                    navigate(`/search`)
                }
            }} />
            <label htmlFor="floatingInput">Search</label>
        </div></div>
}