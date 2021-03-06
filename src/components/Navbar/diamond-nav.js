import React from "react"
import styled from "styled-components";

const DiamondsContainer = styled.div`
  position: fixed;
  right: 15vw;
  bottom: 30vh;
  mix-blend-mode: difference;
  color: #fff;
  z-index: 1;

  @media screen and (max-width: 768px) {
    right: 5vw;
    bottom: 5vh;
  }
  
  @media screen and (max-width: 760px) {
    opacity: 0;
  }
`
const DiamondsA = styled.a`
  display: block;
  text-decoration: none;
  font-size: 30px;
  color: #fff;
`

const DiamondsNav = (props) => {
    const number = props.number;
    let items = [];
    let icon = '◇';
    const navItems = ["#welcome", "#aboutme", "#projects", "#contact"]
    for( let i = 0; i < 4; i++ ) {
        if(number === i)
            icon = '◆';
        items.push(<DiamondsA key={i} href={navItems[i]}>{icon}</DiamondsA>);
    }

    return(
        <DiamondsContainer>{items}</DiamondsContainer>
    );
}

export default DiamondsNav;