import { useFormik } from "formik";
import * as Yup from  "yup" ;
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {useNavigate} from "react-router-dom"
import { MeContext } from "../../Context/MeContext";

export const Login = () => {
    const navigate = useNavigate()

    const {setToken} = useContext(AuthContext);
    const {setMe} = useContext(MeContext)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            axios.post("http://localhost:8080/login", values).then(data => {
                if(data.status == 200){
                    setMe(data.data.user)
                    setToken(data.data.accessToken)
                    navigate("/")
                }
            }).catch(error => console.log(error))
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid Email").required("Required"),
            password: Yup.string().min(3, "Password 3").max(8, "Password 8").required("Required"),
        })
    })



    return <>
        <div className="w-50 mx-auto p-4 shadow-lg bg-white rounded-3">
            <h2 className="mb-3">
                Login
            </h2>

            <form onSubmit={formik.handleSubmit}>
                <label className="form-label w-100 mb-3 ">
                    Email
                    <input className="form-control" type="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} placeholder="Email" />
                    {formik.touched.email && formik.errors.email ? <span className="text-danger fs-6">{formik.errors.email}</span> : null}
                </label>
                <label className="form-label w-100 mb-3 ">
                    Password
                    <input className="form-control" type="password" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} placeholder="Password" />
                    {formik.touched.password && formik.errors.password ? <span className="text-danger fs-6">{formik.errors.password}</span> : null}
                </label>
                <button className="btn btn-success">
                    Submit
                </button>
            </form>
        </div>
    </>
}