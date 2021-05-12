import React, { useState } from "react";
import SignUpButtons from "./SignUpButtons";
import LoginForm from "./LoginForm";

const extraStyle = {
  margin: "auto auto 10px auto",
};

export default function SignUpContainer(props: any) {
  type Button = {
    logo: React.ReactNode;
    text: string;
  };

  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const buttons: Button[] = [
    {
      logo: <i className="fab fa-google"></i>,
      text: "Continue with Google",
    },
    {
      logo: <i className="fab fa-apple"></i>,
      text: "Continue with Apple",
    },
    {
      logo: <i className="fas fa-envelope"></i>,
      text: "Continue with Email",
    },
  ];

  return (
    <>
      <div className="SignUpContainer">
        <div>
          {openLogin ? (
            <h3 id="signUp" style={extraStyle}>
              Log in
            </h3>
          ) : (
            <h3 id="signUp" style={extraStyle}>
              Sign up
            </h3>
          )}

          <p className="text" style={extraStyle}>
            By continuing, you agree to our <span>User Agreement</span> and{" "}
            <span>Privacy Policy</span>.
          </p>
        </div>
        <div className="buttons">
          {buttons.map((element) => (
            <SignUpButtons logo={element.logo} text={element.text} />
          ))}
        </div>
      </div>
      <div>
        {openLogin ? (
          <LoginForm setOpenLogin={setOpenLogin} />
        ) : (
          <p className="text bottom">
            Already a redditor?{" "}
            <span onClick={() => setOpenLogin(true)}>Log in</span>
          </p>
        )}
      </div>
    </>
  );
}

// {openLogin && (
//     <div>
//       -------------<span>OR</span>---------------
//     </div>
//   )}
