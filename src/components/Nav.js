import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaLinkedin, FaVimeo } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';


function Nav() {

    const [showMenu, setShowMenu]= useState(false)

    return (
        <div>
            <header>
                <div className="top-nav">
                    <div className="top-container">
                        <div className="nav-tags">
                            <ul className='nav-list'>
                                <li><a className='list-anchor' href="d">About</a></li>
                                <li><a className='list-anchor' href="d">Forum</a></li>
                                <li><a className='list-anchor' href="d">Buy now!</a></li>
                                <li><a className='list-anchor' href="d">Login/Join</a></li>
                            </ul>
                            <div className="rightnav">
                                <div className="font-size">
                                    <label className='font' htmlFor="radioA">
                                        <input type="radio" className="btn-check" name="radio1" value="A-" />
                                        <span>A-</span>
                                    </label>

                                    <label className='font' htmlFor="radioB">
                                        <input type="radio" className="btn-check" name="radio1" value="A" />
                                        <span>A</span>
                                    </label>

                                    <label className='font' htmlFor="radioC">
                                        <input type="radio" className="btn-check" name="radio1" value="A+" />
                                        <span>A+</span>
                                    </label>
                                    {/* <label>
                                    <input className='input' type="checkbox" id="darkmode-toggle" />
                                    <label className='label' htmlFor="darkmode-toggle">
                                    </label>
                                    </label> */}
                               </div>

                                <ul className="socialmedia">
                                    <li className="icon">
                                        <a href="fb"><FaFacebookSquare /></a>
                                    </li>
                                    <li className="icon">
                                        <a href="tw"><FaTwitterSquare /></a>
                                    </li>
                                    <li className="icon">
                                        <a href="yt"><FaYoutubeSquare /></a>
                                    </li>
                                    <li className="icon">
                                        <a href="li"><FaLinkedin /></a>
                                    </li>
                                    <li className="icon">
                                        <a href="vi"><FaVimeo /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-nav">
                        <div className="main">
                            <div className="logo-image">
                                <img src="https://blogzine.webestica.com/assets/images/logo-light.svg" alt="noImage" />
                            </div>
                            <div className="content-nav">
                                <ul className="ul-nav " id={showMenu && 'showMenu'}>
                                    <li><a href="s">Home</a></li>
                                    <li><a href="s">Pages</a></li>
                                    <li><a href="s">Post</a></li>
                                    <li><a href="s">Lifestyle</a></li>
                                    <li><a href="s">Dashboard</a></li>
                                </ul>
                            </div>
                            <div className="right-section">
                        
                                  <button className="button" onClick={()=>{
                                    setShowMenu(!showMenu)
                                  }}><AiOutlineMenu/></button>  
                           
                                <div className="subscribe">
                                    <a href="d">Subscribe!</a>
                                </div>
                                <div className="search">
                                    <a href="s"><BsSearch /></a>
                                </div>
                                <div className="hembMenu">
                                    <div>
                                        <Button
                                        className='butt-hemb'
                                            color="primary"
                                            onClick={function noRefCheck() { }}
                                        >
                                            <AiOutlineMenuUnfold/>
                                        </Button>
                                        <Offcanvas
                                            direction="end"
                                            toggle={function noRefCheck() { }}
                                        >
                                            <OffcanvasHeader toggle={function noRefCheck() { }}>
                                                Offcanvas
                                            </OffcanvasHeader>
                                            <OffcanvasBody>
                                                <strong>
                                                    This is the Offcanvas body.
                                                </strong>
                                            </OffcanvasBody>
                                        </Offcanvas>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Nav;
