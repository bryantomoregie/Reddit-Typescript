import React from "react";

type LoginProps = {
  setOpenLogin: (bool: boolean) => void;
};
const LoginForm: React.FC<LoginProps> = function (props) {
  return (
    <div id="loginContainer">
      <div id="line"></div>
      <form id="loginForm">
        <input className="loginInput" placeholder="Username"></input>
        <input className="loginInput" placeholder="Password"></input>
        <p className="text bottom">
          Forgot your <span>username</span> or <span>password</span>?
        </p>
        <input
          className="loginInput submitBtn"
          type="submit"
          value="Log In"
        ></input>
        <p className="text bottom">
          New to Reddit?{" "}
          <span onClick={() => props.setOpenLogin(false)}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

//Can you pass useState as a prop?
//What goes in the function block and what goes outside? Why?
//Explain to me passing functions in TypeScript
