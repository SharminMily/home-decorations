/* eslint-disable no-unused-vars */

// import { useForm } from "react-hook-form"

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser} = useContext(AuthContext)
      const { register, handleSubmit, reset, formState: { errors } } = useForm();
      const navigate = useNavigate()
      const location = useLocation();
      const from = location.state?.from?.pathname|| "/";



    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              })            
              .catch(error => console.log(error))
            
                navigate(from, {replace: true});
        })
    }

    return (
        <div className="m-10">            
                      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold  lg:text-5xl text-center">Lets talk!</h2>
                        <div className="text-gray-400 pb-4 text-center">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://i.ibb.co/1J8Mzkv/privacy-policy.gif" alt="" className=" pr-10 md:w-full h-full flex justify-start items-start" />
                </div>

                <div className="border border-violet-700  rounded-xl shadow-xl shadow-slate-500 p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="text-sm">Full name</label>
                            <input id="name" type="text" {...register("name", { required: true })} placeholder="type your name" className="w-full p-3 rounded text-black" />
                        </div>
                        <div>
                            <label className="text-sm">Email</label>
                            <input {...register("email", { required: true })} type="email" placeholder="type your Email" className="w-full p-3 rounded  text-black" />
                        </div>
                        <div>
                            <label className="text-sm ">Password</label>
                            <input {...register("password", { required: true })} type="password" placeholder="type your Password" className="w-full text-black p-3 rounded text-black" />
                        </div>
                        <div>
                            <label className="text-sm">Photo URL</label>
                            <input {...register("text", { required: true })} type="text" placeholder="type your image URL" className="w-full p-3 rounded text-black" />
                        </div>

                        <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-violet-400 text-gray-900">Sign up</button>
                    </form>
                    <div className="mt-4">
                        <p>You have already an account <Link to='/login' className="text-violet-500 font-bold">Sign in</Link> </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;