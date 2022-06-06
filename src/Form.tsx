import React, { useState } from "react";
import "./style.css";

function Form() {
  // react state를 이용한 input value 관리
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [checkedTerms1, setCheckedTerms1] = useState<boolean>(false);

  // 유효성 검사 결과도 state로 관리
  const [validationMessage, setValidationMessage] = useState<string>("");

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
      setValidationMessage("이메일은 필수입니다");
    } else {
      if (regex.test(value)) {
        setValidationMessage("");
      } else {
        setValidationMessage("유효한 이메일 양식이 아닙니다");
      }
    }
  };

  const passwordValidator = (value: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[\w\W]{8,}$/;
    return regex.test(value) || "8자리 이상의 영문, 숫자, 특수문자";
  };

  const handleEmailInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmailInputValue(e.currentTarget.value);
    emailValidator(e.currentTarget.value);
  };

  return (
    <div className="form-container">
      <h1>A Register Form using only React</h1>
      <h2>이것은 리액트만 이용해서 만든 회원가입 폼~</h2>
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
          <p className="error-message">이메일을 확인해주세요</p>
        </div>
        <div className="form-item">
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            value={passwordInputValue}
            onChange={(e) => setPasswordInputValue(e.currentTarget.value)}
          />
          <p className="error-message">비밀번호를 확인해주세요</p>
        </div>
        <div className="form-item">
          <input
            id="terms"
            type="checkbox"
            checked={checkedTerms1}
            onChange={() => setCheckedTerms1((prev) => !prev)}
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
