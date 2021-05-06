import React from "react";

type LoginProps = {
  setOpenLogin: (bool: boolean) => void;
};
const LoginForm: React.FC<LoginProps> = function (props) {
  console.log(props);
  return (
    <>
      <div>
        -------------<span>OR</span>---------------
      </div>
      <form>
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
        <p>
          Forgot your <span>username</span> or <span>password</span>?
        </p>
        <input type="submit" value="Log In"></input>
        <p>
          New to Reddit?{" "}
          <span onClick={() => props.setOpenLogin(false)}>Sign Up</span>
        </p>
      </form>
    </>
  );
};

export default LoginForm;

//Can you pass useState as a prop?
//What goes in the function block and what goes outside? Why?
//Explain to me passing functions in TypeScript
