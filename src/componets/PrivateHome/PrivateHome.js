import { useContext } from "react"
import { MeContext } from "../../Context/MeContext"

export const PrivateHome = () => {
    const {me} = useContext(MeContext)
    return <>
        <h2 className="text-center">
            Wellcome <span className="text-danger">{me.lastname} {me.firstname}</span>
        </h2>
    </>
}