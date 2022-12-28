import {Route, Routes} from "react-router-dom"
import { PublickHeader } from "../../componets/PublickHeader/PublickHeader"
import { PublickHome } from "../../componets/PublickHome/PublickHome"
import { Login } from "../Login/Login"
import { Registration } from "../Registration/Registration"
export const Public = () => {
    return <>
        <PublickHeader />
        <main className="mt-5">
            <Routes>
                <Route index element={<PublickHome />}/>
                <Route path="login" element={<Login  />}/>
                <Route path="registration" element={<Registration  />}/>
            </Routes>
        </main>
    </>
}