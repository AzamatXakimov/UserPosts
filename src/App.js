import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"
import { Private } from "./Pages/Private/Private"
import { Public } from "./Pages/Public/Public"

export const App = () => {
    const {token} = useContext(AuthContext)

    if(token){
        return <Private/>
    }
    return <Public/>
}

// localStorage.setItem("user", JSON.stringify(data.data.user))

// JSON.parse(localStorage.getItem("user"))