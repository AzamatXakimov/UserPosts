import { useContext, useEffect, useRef, useState } from "react"
import axios from "axios";
import { Modal } from "../Modal/Modal";
import { MeContext } from "../../Context/MeContext";
import { UserPostsItem } from "./UserPosts/UserPosts";
export const Settings = () => {
    const {me} = useContext(MeContext);
    const date = new Date();
    const TitleRef = useRef();
    const DescRef = useRef();

    const ChangeTitle = useRef()
    const ChangeDesc = useRef()
    const [isChangePost, setIsChangePost] = useState(false);
    const  [changePostId, setChangePostId] = useState(); 
    const [userPosts, setUserPosts] = useState([]);

    console.log(userPosts);
    useEffect(() => {
        axios.get(`http://localhost:8080/posts?userId=${me.id}`).then(res => {
            setUserPosts(res.data)
            setIsChangePost(false)
        }).catch(res => console.log(res))
    }, [isChangePost]);

    

    const changePost = (id) => {
        console.log(id);
        axios.put(`http://localhost:8080/posts/${id}`, {
            userId: me.id,
            title: ChangeTitle.current.value,
            desc: ChangeDesc.current.value,
            author: me.lastname + "" + me.firstname,
            datePost: date.toLocaleDateString() + " " + date.toLocaleTimeString().substring(0, 5)
        }).then(res => {
            setIsChangePost(true)
            console.log(res)
        }).catch(err => console.log(err))
    }

    const handalFormsubmit = (evt) => {
        evt.preventDefault();

        axios.post("http://localhost:8080/posts", {
            userId: me.id,
            title: TitleRef.current.value,
            desc: DescRef.current.value,
            author: me.lastname + "" + me.firstname,
            datePost: date.toLocaleDateString() + " " + date.toLocaleTimeString().substring(0, 5 )
        }).then(res => {
            setIsChangePost(true)
            console.log(res)
        }).catch(err => console.log(err))
    }

    return <>
        <section>
            <div className="container">
                <h2 className="text-center fs-1 mb-3">
                    Settings
                </h2>
                <div className="p-5 shadow-lg">
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#settingsModal">
                        Add Post
                    </button>
                    <h3 className="text-center">
                        My Posts
                    </h3>
                    <ul className="mb-0 list-group list-unstyled">
                        {userPosts.map(item => <UserPostsItem title={item.title} id={item.id} changeId={setChangePostId} setUserPosts={setUserPosts} userPosts={userPosts} setIsChangePost={setIsChangePost}/>)}
                    </ul>
                </div>

            </div>
        </section>
        <Modal title="Add post" bsTarget = "settingsModal">
            <form className="px-2" onSubmit={handalFormsubmit}>
                <label className="w-100 mb-4">
                    <span className="fs-5">Title</span>
                    <input className="form-control" type="text" ref={TitleRef} placeholder="Title" required/>
                </label>
                <label className="w-100 mb-4">
                    <span className="fs-5">Body</span>
                    <textarea className="form-control" type="text" ref={DescRef} placeholder="Body" required></textarea>
                </label>
                <button className="btn btn-success" type="submit">
                    Add
                </button>
            </form>
        </Modal>
        <Modal title="Edit Post" bsTarget="EditModal">
            <form className="px-2" onSubmit={(evt) => {
                evt.preventDefault();
                changePost(changePostId)
            }}>
                <label className="w-100 mb-4">
                    <span className="fs-5">Title</span>
                    <input className="form-control" type="text" ref={ChangeTitle} placeholder="Title" required/>
                </label>
                <label className="w-100 mb-4">
                    <span className="fs-5">Body</span>
                    <textarea className="form-control" type="text" ref={ChangeDesc} placeholder="Body" required></textarea>
                </label>
                <button className="btn btn-warning" type="submit">
                    Edit
                </button>
            </form>
        </Modal>
    </>
}