import { Route, Routes } from "react-router-dom"
import { Posts } from "../../componets/Posts/Posts"
import { PrivateHeader } from "../../componets/PrivateHeader/PrivateHeader"
import { PrivateHome } from "../../componets/PrivateHome/PrivateHome"
import { Profile } from "../../componets/Profile/Profile"
import { Settings } from "../../componets/Settings/Settings"
export const Private = () => {
    return <>
        <PrivateHeader/>
        <main className="mt-5">
            <Routes>
                <Route index element={<PrivateHome />}/>
                <Route path="posts" element={<Posts />}/>
                <Route path="profile" element={<Profile />}/>
                <Route path="settings" element={<Settings />}/>
            </Routes>
        </main>
    </>
}