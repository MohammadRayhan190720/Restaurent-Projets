import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  // useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  

  // form submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      // console.log(loggedUser);
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        console.log('user profile updated');
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Successfully SignUp",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch(error => console.log(error))
    })
    // এখানে তুমি signup logic (Firebase/Auth/Backend API) কল করতে পারো
  };

  return (
    <>
    <Helmet>
        <title>Restaurent | SignUp</title>
    </Helmet>
      <div className="min-h-screen bg-base-200">
        <div className="flex-col hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">SignUp Now!!!</h1>
          </div>
          <div className="max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
                {/* photoURL */}
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  placeholder="Photo URl"
                  className="input"
                  {...register("photoURL", { required: "Photo URL is required" })}
                />
                {errors.photoURL && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}

                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be at getter then 20 characters",
                    },

                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase,lowercase, number and special character",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}

                <input
                  type="submit"
                  className="mt-4 btn btn-secondary"
                  value="SignUp"
                />
                
              
              </fieldset>
              
            </form>

            {/* Login Link */}
            <div>
              <p className="mb-4 text-center">
                Already have an account?{" "}
                <Link className="font-bold text-orange-600" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
