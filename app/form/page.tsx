'use client';
import { useForm } from 'react-hook-form';
import TitleBar from '../components/titlebar';
 
export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError
  } = useForm();
 
  const password = watch("password");
  const onSubmit = (data: any) => {
    console.log(data);
  };
 
  return (
    <>
      <TitleBar title="Form" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <table style={{ border: '1px solid black', width: '70%', margin: '50px 0' }}>
          <tbody>
            <tr>
              <td>Full Name:</td>
              <td>
                <input {...register("fullname", { required: true })} placeholder="Full Name" />
                {errors.fullname && <span>Full name is required</span>}
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  {...register("email", {
                    required: true,
                    pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}placeholder="email"/>
                {errors.email && <span>Invalid email</span>}
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long"
                    }
                  })}placeholder="password"/>
                {errors.password && <span>Password is required</span>}
              </td>
            </tr>
            <tr>
              <td>Confirm Password:</td>
              <td>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === password || "Passwords do not match"
                  })}placeholder="confirm password"
                />
                {errors.confirmPassword && <span>Please confirm your password</span>}
              </td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>
                <input
                  type="date"
                  {...register("dob", { required: "Date of Birth is required" })}
                />
                {errors.dob && <span>Date of Birth is required</span>}
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <select
                  {...register("gender", { required: "Gender is required" })}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span>Gender is required</span>}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Register" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );

}
