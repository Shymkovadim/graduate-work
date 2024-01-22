import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { changeOffset, changeSearch } from "../redux/pages/articles/action";


export const Header: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return <div className="d-flex  mb-3 justify-content-between">
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav> */}
        <Link to={'/'}>LOGO</Link>

        <div className="d-flex"> <Link to={'/create'}>Creare</Link> <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="Title.." onChange={(event: any) => { setValue(event.target.value); }} onKeyDown={(event: any) => {
                if (event.key === 'Enter') {
                    if (value) {

                        dispatch(changeSearch(value) as any);
                        dispatch(changeOffset(0))
                    }
                    navigate(`/search`)
                }
            }} />
            <label htmlFor="floatingInput">Search</label>

        </div>
        </div>
    </div>
}