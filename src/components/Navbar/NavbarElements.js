import styled from 'styled-components';

export const Nav = styled.nav`
    background: var(--bg);
    height: 80px;
    //margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`

export const NavLogo = styled.div`
  justify-self: flex-start;
  display: flex;
  align-items: center;
`

export const NavMobileIcon = styled.a`
  display: none;
  
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    height: 60px;
    width: 60px;
    border-radius: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    justify-self: flex-end;
    font-size: 1rem;
    cursor: pointer;
    transition: all .5s ease;

    &:hover, &:focus, &:active {
      color: white;
      background-color: black;
    }
    
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  width: 100px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
`

export const NavA = styled.a`
  background-color: transparent;
  transition: all .5s ease;
  border: none;
  height: 30px;
  width: 80px;
  border-radius: 10px;
  color: black;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &:hover, &:focus, &:active {
    color: white;
    background-color: black;
  }
`
