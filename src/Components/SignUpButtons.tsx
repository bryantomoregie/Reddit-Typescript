import React from 'react';

type ButtonProps = {
    logo: React.ReactNode,
    text: string
}

const logoStyle = {
    color: "black",
    margin: "auto 70px auto -80px",

}

export default function SignUpButton({logo, text}: ButtonProps){
    return (
        <button className="button">
            <span style={logoStyle}>
            {logo}
            </span>    
            {text}
        </button>
    )
}

/*On click of login button, set state to true. If true, 
present the other ui */