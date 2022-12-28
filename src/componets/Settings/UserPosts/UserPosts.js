import axios from "axios";
export const UserPostsItem =({title,  id, changeId, setIsChangePost}) => {

    return <>
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <h4>{title}</h4>
            <div>
                <button className="btn btn-warning me-4" data-bs-toggle="modal" data-bs-target="#EditModal" onClick={() => {
                    changeId(id);
                }}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={() => {
                    axios.delete("http://localhost:8080/posts/"+id).then(res => console.log(res)).catch(err => console.log(err));
                    setIsChangePost(true)
                }}>
                    Delete
                </button>
            </div>
        </li>
    </>
}