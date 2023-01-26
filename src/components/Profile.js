import React from 'react'
import { BsDot } from "react-icons/bs";
import styled from 'styled-components';
import '../App.css'

function Profile({profileImage,profileName,date,duration,color,width ,fontSize }) {
    return (
        <ProfileCard className='profileCard' color={color} width={width} fontSize ={fontSize } >
            <ul className='list-items'>
                <li className='list-image'>
                    {profileImage && <img src={profileImage} alt="NoImage" />}
                    <p className='author'>{profileName}</p>
                </li>
                <li className='list-date'><BsDot />{date}</li>
                {duration && <li className='list-duration'><BsDot /> {duration}</li>}
            </ul>
        </ProfileCard>
    )
}

const ProfileCard= styled.div`
.list-items {
    display: flex;
    flex-wrap: inherit;
    justify-content: flex-start;
    color: white;
    align-items: center;
    list-style-type: none;
}

.list-image {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.list-image img {
    width: ${props => props.width? props.width : "60px"};
    border-radius: 50%;
    margin-right: 10px;
}

.author{
display: inline-block;
position: relative;
margin-right:13px; 
color:${props => props.color? props.color : "white"};
font-size:${props => props.fontSize? props.fontSize : "16px"};
}

.author::after {
content: '';
position: absolute;
width: 100%;
transform: scaleX(0);
height: 2px;
bottom: 0;
left: 0;
background-color:${props => props.color? props.color : "white"};;
transform-origin: bottom right;
transition: transform 0.5s ease-out;
}

.author:hover::after {
transform: scaleX(1);
transform-origin: bottom left;
}

.list-date{
    color:${props => props.color? props.color : "white"};
    font-size:${props => props.fontSize? props.fontSize : "16px"};
}
.list-duration {
    padding: 0px 20px;

}

`
export default Profile;