import { useState } from "react"
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom"

export const Header: React.FC = () => {
    const [value, setValue] = useState<string>('')

    let navigate = useNavigate()

    return <div className="d-flex  mb-3 justify-content-between">
        <Link to={'/вавав'}>LOGO</Link>
        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="Title.." onChange={(event: any) => { setValue(event.target.value) }} onKeyDown={(event: any) => {
                if (event.key === 'Enter') {
                    const params = `&s=${value}&limit=12`

                    navigate(`/search/${params}`)

                    // setValue('')
                }
            }} />
            <label htmlFor="floatingInput">Search</label>
        </div></div>
}