import React from 'react'
import ScrollArrow from './ScrollArrow';

function Footer() {
    return (
        <>
            <footer>
                <ScrollArrow />
                <div className="top-footer">
                    <div className="foot-logo">
                        <img src="https://blogzine.webestica.com/assets/images/logo-footer.svg" alt="nologo" />
                    </div>
                    <div className="foot-content">
                        <p>The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
                    </div>
                    <div className="right-foot-content">
                        <form className='form-cl' action="">
                            <div className="input-box">
                                <input type="email" className='form-input' name="" id="" placeholder="Enter your email address" />
                            </div>
                            <div >
                               <button className="subs-button"> Subscribe</button> 
                            </div>
                            </form>
                            <div className="privacy-policy">
                                <p>By subscribing you agree to our </p>
                                <a href="s"> Privacy Policy</a>
                            </div>
                        

                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="left-footer">
                        <p>&#169; <a href="d" className='webestica'>Webestica</a> .All rights reserved</p>
                    </div>
                    <div className="right-footer">
                        <div className="top-dropdown">
                            <a href="d">English Edition</a>
                        </div>
                        <ul className='foot-list'>
                            <li><a href="s">Terms</a></li>
                            <li><a href="s">Privacy</a></li>
                            <li><a href="s">Cookies</a></li>
                        </ul>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;