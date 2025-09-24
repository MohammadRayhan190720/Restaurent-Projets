import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // এখানে তুমি signup logic (Firebase/Auth/Backend API) কল করতে পারো
  };

  return (
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
  );
};

export default SignUp;
