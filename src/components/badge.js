import styled from 'styled-components'

export const Badge = styled.a`
    background:${props => props.bgColor === "Technology" ? "#F6C22E" : props.bgColor === "Business" ? 'green' : props.bgColor === "Lifestyle" ? "red" :
        props.bgColor === "Sports" ? "#4E9EF9" : props.bgColor === "Travel" ? 'red' : props.bgColor === "Gadgets" ? 'green' : props.bgColor === "Photography" ? 'red' :props.bgColor === "Marketing" ? 'green' : null};
    
    color: ${props => props.bgColor === "Technology" ? "black" : 'white'};
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
   ${props => props.upperBadge && `
    position: absolute;
    top: 80%;
    z-index : 99;
    left : 10px
   `}

   ${props => props.upperBadge1 && `
    position: absolute;
    top: 87%;
    z-index : 99;
    left : 10px
   `}

   ${props => props.mobileBadge && `
    position: absolute;
    top: 75%;
    z-index : 99;
    left : 10px
   `}
`