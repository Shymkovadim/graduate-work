import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { changeOffset, changeSearch } from "../redux/pages/articles/action";


export const Header: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>LOGO</Link>


            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">

                        <Link to={'/create'}>Create article </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'}>Home</Link>

                    </li>

                </ul>
                <div className="d-flex">
                    <input type="text" className="form-control me-2" id="floatingInput" placeholder="Search" onChange={(event: any) => { setValue(event.target.value); }} onKeyDown={(event: any) => {
                        if (event.key === 'Enter') {
                            if (value) {

                                dispatch(changeSearch(value) as any);
                                dispatch(changeOffset(0))
                            }
                            navigate(`/search`)
                        }
                    }} />


                </div>

            </div>
        </div>
    </nav>

}