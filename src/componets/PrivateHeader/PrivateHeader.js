import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"
import { MeContext } from "../../Context/MeContext"
import "./PrivateHeader.css"
export const PrivateHeader = () => {

    const {setToken} = useContext(AuthContext)
    const {me} = useContext(MeContext)
    return<>
        <header className="py-4 shadow">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link className="me-5 fs-3 text-decoration-none text-secondary" to="/">WebSite</Link>
                        <NavLink to="/" className={({isActive}) => isActive ? "me-5 text-decoration-underline fs-5 text-info" : "me-5 text-decoration-none text-secondary"}>Home</NavLink>
                        <NavLink to="/posts" className={({isActive}) => isActive ? "text-decoration-underline fs-5 text-info" : "text-decoration-none text-secondary"}>Posts</NavLink>
                    </div>
                    <div class="dropdown">
                        <button className="accaunt btn btn-secondary dropdown-toggle  rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {me.firstname[0]} {me.lastname[0]}
                        </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="profile">My Profile</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="settings">Settings</Link>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button" onClick={() => {
                                        setToken("")
                                    }}>Log Out</button>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </header>
    </>
}