import React from "react";
import './index.css';

export const Header = () => {
    return(
        <div className='header'>
            <div className='leftSideHeader'>
                <img src='https://images.squarespace-cdn.com/content/v1/5b73e7c929711420e5403bc8/1581338842603-T6VGEBLN6YYTCX741JR9/Amazon-com-logo.png' alt='logo' class='logo'/>
                <div className='delivery'>
                    <h1 class='deliveryName'>Deliver to John</h1>
                    <h1 class='deliveryLocation'>Newcastle NE1 1AD</h1>
                </div>
            </div>
            <div className='middleHeader'>
                <input type='text' placeholder='Search Amazon.co.uk' className="search"/>
                <img src='https://www.seekpng.com/png/full/882-8823347_keyword-research-and-optimization-for-amazon-search-circle.png' alt='searchIcon' class='searchIcon'/>
            </div>
            <div className='rightSideHeader'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' alt='location' class='location'/>
                <div className='account'>
                    <h1 class='accountName'>Hello, John</h1>
                    <h1 class='accountLink'>Account & Lists ⏑</h1>
                </div>
                <div className='orders'>
                    <h1 class='returns'>Returns</h1>
                    <h1 class='ordersLink'>& Orders</h1>
                </div>
                <div class='basket'>
                    <h1 class='basketTotal'>0</h1>
                    <img src='https://assets.webiconspng.com/uploads/2017/09/Shopping-Cart-PNG-Image-82143.png' alt='basket' class='basketIcon'/>
                </div>
            </div>
        </div>
    )
};