import { Form, useForm } from "react-hook-form";

function Hookform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(ValueData) {
    console.log(ValueData);
  }
  return (
    <div>
      <h2>Hooks Form</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label>Email</label>
          <input {...register("email", { required: true })} type="email" />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder" }}>Emai chaiye</p>
          ) : null}
        </div>
        <div>
          <label> Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            type="Password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder" }}>
              Password chaiye
            </p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p style={{ color: "red", fontWeight: "bolder" }}>
              Password 8 hona chaiye
            </p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Hookform;
