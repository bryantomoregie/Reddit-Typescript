import React from 'react';
import SignUpButtons from './SignUpButtons'

export default function SignUpContainer(){
    type button = {
        logo: React.ReactNode,
        text: string
    }

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
    console.log()
    return(
        <>
            <div>
            <h3>Sign Up</h3>
            <p>By continuing, you agree to our <span>User Agreement</span> and <span>Privacy Policy</span>.</p>
            </div>
            <div>
              {buttons.map((element) => <SignUpButtons logo={element.logo} text={element.text}/>)}
            </div>
            <div>
                <p>Already a redditor? <span>Log in</span></p>
            </div>
        </>
    )
}