import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { changeOffset, changeSearch } from "../redux/pages/articles/action";
import logo from "../asset/images/logo.png"

export const Header: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return <nav className="navbar navbar-expand-lg  bg-body-tertiary header"  >
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}> <img className="header__logo" src={logo} alt="Pinterest" /> Space</Link>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/create'}>Create article </Link>
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
    </nav >

}