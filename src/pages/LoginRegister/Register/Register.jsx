
// import { useForm } from "react-hook-form"

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    // const { register, handleSubmit } = useForm();

    // const onSubmit = (data) => console.log(data)
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="m-10">
                      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold  lg:text-5xl text-center">Lets talk!</h2>
                        <div className="dark:text-gray-400 pb-4 text-center">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://i.ibb.co/2hGF3Mp/IMG-20240303-163904-removebg-preview.png?fbclid=IwAR0R2IZjXiolUm4NF-pKsc8GPGPHrVQ12rXC1kGauCLb1C3_jGTWnHj6SM4" alt="" className=" pr-10 md:w-full h-full flex justify-start items-start" />
                </div>

                <div className="border border-violet-700  rounded-xl shadow-xl shadow-slate-500 p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="text-sm">Full name</label>
                            <input id="name" type="text" {...register("name", { required: true })} placeholder="type your name" className="w-full p-3 rounded" />
                        </div>
                        <div>
                            <label className="text-sm">Email</label>
                            <input {...register("email", { required: true })} type="email" placeholder="type your Email" className="w-full p-3 rounded " />
                        </div>
                        <div>
                            <label className="text-sm text-black">Password</label>
                            <input {...register("password", { required: true })} type="password" placeholder="type your Password" className="w-full text-black p-3 rounded " />
                        </div>
                        <div>
                            <label className="text-sm">Photo URL</label>
                            <input {...register("text", { required: true })} type="text" placeholder="type your image URL" className="w-full p-3 rounded" />
                        </div>

                        <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Register</button>
                    </form>
                    <div className="mt-4">
                        <p>You have already an account <Link to='/login' className="text-blue-600 font-bold">Login</Link> </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;