import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { signIn } = useContext(AuthContext)

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)

        signIn(data.email, data.password)
        .then(res => {8
            const user = res.user;
            console.log(user);})

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              })
              navigate("/")
        
    }


    return (
        <div className="m-10">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between ">
                    <div className="space-y-2">
                        <h2 className="text-4xl text-center font-bold lg:text-5xl">Lets talk!</h2>
                        <div className="dark:text-gray-400 pb-6 text-center ">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://i.ibb.co/2hGF3Mp/IMG-20240303-163904-removebg-preview.png?fbclid=IwAR0R2IZjXiolUm4NF-pKsc8GPGPHrVQ12rXC1kGauCLb1C3_jGTWnHj6SM4" alt="login-image" className="w-full flex justify-start pr-8 items-center" />
                </div>

                <div className="border border-violet-700  rounded-xl shadow-xl shadow-slate-500 p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="text-sm">Email</label>
                            <input {...register("email", { required: true })} type="email" placeholder="type your Email" className="w-full p-3 rounded " />
                        </div>
                        <div>
                            <label className="text-sm text-white">Password</label>
                            <input {...register("password", { required: true })} type="password" placeholder="type your Password" className="w-full text-black p-3 rounded " />
                        </div>
                        
                        <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Login</button>
                    </form>
                    <div className="mt-4">
                        <p>Create an account <Link to='/register' className="text-blue-600 font-bold">Register</Link> </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;