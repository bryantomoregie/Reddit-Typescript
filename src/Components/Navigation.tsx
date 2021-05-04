import React from 'react';
import { isWhiteSpaceLike } from 'typescript';

const logoStyle = {
    fontSize: '1.5rem',
    margin: 'auto 7px auto auto',
    color: '#ff4500'
}

const arrowStyle = {
    padding: '5px',
    margin: 'auto 10px auto auto'
}



export default function Navigation(){
    return(
        <nav>
            <div id="logo">

                <span style={arrowStyle}>
                    <i className="fas fa-arrow-left"></i>
                </span>
                
                <span style={logoStyle}>
                    <i className="fab fa-reddit"></i>
                </span> 

                <h3>reddit</h3>
                
            </div>
            
            <div id="useAppButton">Use App</div>
        </nav>
    )
}