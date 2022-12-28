import { Link } from "react-router-dom"

export const PublickHeader = () => {
    return <>
        <header className="py-4 shadow">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <Link  className="fs-3 text-decoration-none text-secondary" to="/">WebSite</Link>

                    <div className="d-flex align-items-center">
                        <Link className="btn p-2 btn-outline-success" to="registration">Registration</Link>
                        <Link className="btn p-2 btn-success ms-4" to="login">Login</Link>
                    </div>
                </div>
            </div>
        </header>
    </>
}