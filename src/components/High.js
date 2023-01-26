import React from 'react'
import { GoPrimitiveDot } from "react-icons/go";
import Profile from './Profile';
import { Badge } from './badge';
import styled from 'styled-components';


const NewsCard = styled.div`

.card-image{
    position : relative
}

.card-image img {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

.card-title {
    font-weight: 700;
    color: #ffffff;
    font-size: ${props => props.textSize ? props.textSize : "23px"};
    display: inline-block;
    position: relative;
    margin: ${props => props.padding ? props.padding: "0.5em 0 0.1em 0"}; 

}

.card-title::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
}

.card-title:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}



.card-text {
    padding-top: 1rem;
    color: rgb(161 161 168);
    margin-bottom: 1rem;
    font-size: 16px;
    line-height: 1.5;
    
}

.highlights-card{
    display: ${props => props.display ? props.display : "block"};
}
`


function High({ higBGImage, badgeText, higTitle, higPara, profileImage,padding, profileName, date, duration, textSize, upperBadge, upperBadge1, mobileBadge,display }) {
    const profileProps = { profileImage, profileName, date, duration }
    return (
        <NewsCard textSize={textSize} display={display} padding={padding}>
            <div className="highlights-card">
                <div className="card-image">
                    {higBGImage && <img src={higBGImage} alt="noImage" />}
                    {badgeText && <Badge upperBadge={upperBadge} upperBadge1={upperBadge1} mobileBadge={mobileBadge} className='badges' bgColor={badgeText} href="#f"  ><GoPrimitiveDot />{badgeText}</Badge>}
                </div>
                <div className="description-box">
                    {higTitle && <h4 className="card-title">{higTitle}</h4>}
                    {higPara && <p className="card-text"> {higPara}</p>}
                    <Profile {...profileProps} color="#a1a1a8" width="30px" fontSize="15px" />

                </div>
            </div>
        </NewsCard>

    )
}


export default High;
