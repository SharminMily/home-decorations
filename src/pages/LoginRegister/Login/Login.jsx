import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialAccount from "../SocialAccount/SocialAccount";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  // eslint-disable-next-line no-unused-vars
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password).then((res) => {
      8;
      const user = res.user;
      console.log(user);
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <div className="m-10">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
        <div className="flex flex-col justify-between ">
          <div className="space-y-2">
            <h2 className="text-4xl text-center font-bold lg:text-5xl">
              Lets talk!
            </h2>
            <div className="text-gray-400 pb-6 text-center ">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img
            src="https://i.ibb.co/1J8Mzkv/privacy-policy.gif"
            alt="login-image"
            className="w-full flex justify-start pr-8 items-center"
          />
        </div>

        <div className="border border-violet-700  rounded-xl shadow-xl shadow-slate-500 p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-10">
            <div>
              <label className="text-sm">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="type your Email"
                className="w-full p-3 rounded text-black"
              />
            </div>
            <div>
              <label className="text-sm text-white">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="type your Password"
                className="w-full text-black p-3 rounded "
              />
            </div>

            <button
              type="submit"
              className="w-full p-3  text-sm font-bold uppercase rounded bg-violet-400 text-gray-900"
            >
              Sign in
            </button>
          </form>
          <SocialAccount></SocialAccount>
        </div>
      </div>
    </div>
  );
};

export default Login;
