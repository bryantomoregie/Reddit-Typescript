import React from 'react';

type ButtonProps = {
    logo: React.ReactNode,
    text: string
}

export default function SignUpButton({logo, text}: ButtonProps){
    return (
        <button>
            {logo}
            {text}
        </button>
    )
}

/*On click of login button, set state to true. If true, 
present the other ui */