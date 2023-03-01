import React from "react";
import './index.css';


export const Footer = () => {
    return(
        <div className='footerBase'>
            <div className='top'>
                <img src='https://images.squarespace-cdn.com/content/v1/5b73e7c929711420e5403bc8/1581338842603-T6VGEBLN6YYTCX741JR9/Amazon-com-logo.png' alt='logo' class='logoFooter'/>
            </div>
            <div className='bottom'>
                <h1 class='footerLink'>Get to Know Us</h1>
                <h1 class='footerLink'>Make Money with Us</h1>
                <h1 class='footerLink'>Amazon Payment Methods</h1>
                <h1 class='footerLink'>Let Us Help You</h1>
            </div>
        </div>
    )
}