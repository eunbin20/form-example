import React, { useState } from "react";
import "./style.css";

function Form() {
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [checkedTerms, setCheckedTerms] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = {
      email: emailInputValue,
      password: passwordInputValue,
    };

    alert("submit completed!" + JSON.stringify(result));
  };

  const emailValidator = (value: string) => {
    const regex = /^[\w\W-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (value.length === 0) {
      setErrorMessage("이메일은 필수입니다");
    } else {
      if (regex.test(value)) {
        setErrorMessage("");
      } else {
        setErrorMessage("유효한 이메일 양식이 아닙니다");
      }
    }
  };

  const passwordValidator = (value: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[\w\W]{8,}$/;

    if (regex.test(value)) {
      setErrorMessage("8자리 이상의 영문, 숫자, 특수문자");
    }
  };

  const handleEmailInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmailInputValue(e.currentTarget.value);
    emailValidator(e.currentTarget.value);
  };

  const handlePasswordInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.currentTarget.value);
    passwordValidator(e.currentTarget.value);
  };

  return (
    <div className="form-container">
      <h1>A Register Form using only React</h1>
      <h2>이것은 리액트만 이용해서 만든 회원가입 폼</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-item">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            value={emailInputValue}
            onChange={handleEmailInputChange}
            autoComplete="off"
            pattern="[A-Za-z-\.]+@([a-z-]+\.)+[\w-]{2,4}"
            required
          />
          <p className="error-message">{errorMessage}</p>
        </div>
        <div className="form-item">
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            value={passwordInputValue}
            onChange={handlePasswordInputChange}
          />
          <p className="error-message">{errorMessage}</p>
        </div>
        <div className="form-item">
          <input
            id="terms"
            type="checkbox"
            checked={checkedTerms}
            onChange={() => setCheckedTerms((prev) => !prev)}
          />
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

export default Form;
