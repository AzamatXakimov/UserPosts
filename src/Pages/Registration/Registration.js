import { useFormik } from "formik";
import * as Yup from  "yup" ;
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {useNavigate} from "react-router-dom"
import { MeContext } from "../../Context/MeContext";
export const Registration = () => {
    const navigate = useNavigate()
    const {setMe} = useContext(MeContext)
    const {setToken} = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            axios.post("http://localhost:8080/users", values).then(data => {
                if(data.status == 201){
                    setToken(data.data.accessToken)
                    setMe(data.data.user)
                    navigate("/")
                }
            }).catch(error => console.log(error))
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Required"),
            lastname: Yup.string().required("Required"),
            email: Yup.string().email("Invalid Email").required("Required"),
            password: Yup.string().min(3, "Password 3").max(8, "Password 8").required("Required"),
        })
    })



    return <>
        <div className="w-50 mx-auto p-4 shadow-lg bg-white rounded-3">
            <h2 className="mb-3">
                Registration
            </h2>

            <form onSubmit={formik.handleSubmit}>
                <label className="form-label w-100 mb-3 ">
                    First Name
                    <input className="form-control" type="text" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur} placeholder="First Name" />
                    {formik.touched.firstname &&  formik.errors.firstname ? <span className="text-danger fs-6">{formik.errors.firstname}</span> : null}
                </label>
                <label className="form-label w-100 mb-3 ">
                    Last Name
                    <input className="form-control" type="text" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} placeholder="Last Name" />
                    {formik.touched.lastname &&  formik.errors.lastname ? <span className="text-danger fs-6">{formik.errors.lastname}</span> : null}
                </label>
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
                <button className="btn btn-success" type="submit">
                    Submit
                </button>
            </form>
        </div>
    </>
}