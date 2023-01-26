import React from 'react'
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare, FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';
import data from '../cards.json';
import High from './High';

const SocialMedia = [
    {
        "social": FaFacebookSquare,
        "number": "1.5K",
        "fans": "Fans"
    },
    {
        "social": FaInstagram,
        "number": "1.8M",
        "fans": "Followers"
    },
    {
        "social": FaLinkedin,
        "number": "50k",
        "fans": "Connections"

    },
    {
        "social": FaYoutubeSquare,
        "number": "22K",
        "fans": "Subscribers"
    }
]

const Social = styled.div`
    background: ${props => props.index === 0 ? "#5d82d1;" : props.index === 1 ? "radial-gradient(circle at 20% 130%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);" : props.index === 2 ? "#0073b1" : props.index === 3 ? "#ff0000" : null};
    width : 15%;
    text-align:center;
    padding:15px;
    border-radius:10px;
    @media only screen and (max-width: 500px) {
        width : 90%;
        margin:4px;
    }

.social-anchor{
    text-decoration:none;
    color:white !important;
    font-size:30px
}
.social-anchor h6{
    font-size:20px;
    padding-top:5px;
}

span{
    color:white;
    padding:0px;
    font-size:17px
}


`

function SocialCards() {
    return (
        <>
            <section>
                <div className="right-container">
                    <div className="socialMedia">
                        <div className='socialCardContainer'>
                            {SocialMedia.map((d, index) => {
                                return (
                                    <Social index={index} >
                                        <a className='social-anchor' href="d">
                                            <d.social />
                                            <h6>{d.number}</h6>
                                            <span>{d.fans}</span>
                                        </a>
                                    </Social>
                                )
                            })}
                        </div>

                        <div className="treanding">
                            <h4 className='treanding-title'>Treanding Topics</h4>
                            <div className="main-tranding">
                               <div>
                                    {data.treanding.map((d) => {
                                        return <>
                                            <div className="treanding-container">
                                                <div className="bg-image-container" style={{ backgroundImage: `url(${d.image})` }}>
                                                    <a className='bg-anchor-container' href="e">{d.text}</a>
                                                </div>
                                            </div>

                                        </>
                                    })}
                                    </div>
                                <div className="advertisement">
                                    <img className='advertisement-image' src="https://blogzine.webestica.com/assets/images/adv.png" alt="noImag" />
                                </div>
                            </div>
                            <div className="anchor-cont">
                                <a className='categories-anchor' href="s">View all categories</a>
                            </div>
                        </div>

                        <div className="recent">
                            <h4 className='recent-title'>Recent Post</h4>
                            <div className="recent-wrapper">
                                {data.Recent.map((Recent) => {
                                    return <High display='flex' textSize='20px' padding='0px 10px 0px 20px' {...Recent} />
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}



export default SocialCards;