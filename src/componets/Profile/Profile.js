import { useContext } from "react"
import { MeContext } from "../../Context/MeContext"
import "./Profile.css"
export const Profile = () => {
    const {me} = useContext(MeContext)
    return<>
        <section>
            <div className="container">
                <div className="d-flex align-items-start shadow-lg p-5">
                    <div className="profile-icon d-flex align-items-center justify-content-center rounded-circle bg-secondary">
                        <h2 className="text-white fs-1">
                            {me.firstname[0]} {me.lastname[0]}
                        </h2>
                    </div>
                    <ul className="profile-info ms-5 mb-0 list-unstyled">
                        <li className="mb-4 pb-2 border-bottom">
                            <strong className="text-secondary fs-4">First Name: </strong>
                            <span className="fs-4 text-black">{me.firstname}</span>
                        </li>
                        <li className="mb-4 pb-2 border-bottom">
                            <strong className="text-secondary fs-4">Last Name: </strong>
                            <span className="fs-4 text-black">{me.lastname}</span>
                        </li>
                        <li className="mb-4 pb-2 border-bottom">
                            <strong className="text-secondary fs-4">Email: </strong>
                            <span className="fs-4 text-black">{me.email}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
}