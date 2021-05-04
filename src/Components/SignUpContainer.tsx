import React, {useState} from 'react';
import SignUpButtons from './SignUpButtons'

const extraStyle = {
    margin: "auto auto 10px auto",
}

export default function SignUpContainer(){
    type button = {
        logo: React.ReactNode,
        text: string
    }

    const [openLogin, setOpenLogin] = useState(false);

    const buttons: button[] = [
        {
            logo: <i className="fab fa-google"></i>,
            text: "Continue with Google"
        },
        {
            logo: <i className="fab fa-apple"></i>,
            text: "Continue with Apple"
        },
        {
            logo: <i className="fas fa-envelope"></i>,
            text: "Continue with Email"
        }
    ]
    console.log(openLogin)
    return(
        <div className="SignUpContainer">
            <div >
            <h3 id="signUp" style={extraStyle}>Sign up</h3>
            <p style={extraStyle}>By continuing, you agree to our <span>User Agreement</span> and <span>Privacy Policy</span>.</p>
            </div>
            <div className="buttons">
              {buttons.map((element) => <SignUpButtons logo={element.logo} text={element.text}/>)}
            </div>
                {openLogin 
                ?
                <div>
                    <div>-------------<span>OR</span>---------------</div>
                    <form>
                        <input placeholder="Username" ></input>
                        <input placeholder="Password"></input>
                        <p>Forgot your <span>username</span> or <span>password</span>?</p>
                        <input type="submit" value="Log In"></input>
                        <p>New to Reddit? <span>Sign Up</span></p>
                    </form>
                </div>
                : 
                <div>
                    <p>Already a redditor? <span onClick={() => setOpenLogin(true)}>Log in</span></p>
                
                </div>
}
           
           


        </div>
    )
}