import React from "react";
import "./style.css";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  terms: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const result = {
      email: data.email,
      password: data.password,
      terms: data.terms,
    };

    alert("submit completed!" + JSON.stringify(result));
  };

  return (
    <div className="form-container">
      <h1>A Register Form using only React</h1>
      <h2>react-hook-form을 활용해보았다!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <div className="form-item">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            {...register("email", {
              required: {
                value: true,
                message: "이메일은 필수입니다",
              },
              pattern: {
                value: /^[A-Za-z-.]+@([a-z-]+.)+[w-]{2,4}/i,
                message: "유효한 이메일 양식이 아닙니다",
              },
            })}
          />
          <p className="error-message">{errors?.email?.message}</p>
        </div>
        <div className="form-item">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            {...register("password", {
              pattern: {
                value: /^[A-Za-z-.]+@([a-z-]+.)+[w-]{2,4}/i,
                message: "8자리 이상의 영문, 숫자, 특수문자",
              },
            })}
          />
          <p className="error-message">{errors?.password?.message}</p>
        </div>
        <div className="form-item">
          <input type="checkbox" {...(register("terms"), { required: true })} />
          <label htmlFor="terms" className="checkbox-label">
            terms content...
          </label>
        </div>
        <div className="form-item">
          <input type="submit" value="제출" />
        </div>
      </form>
    </div>
  );
}
