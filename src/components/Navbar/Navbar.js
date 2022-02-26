import React from "react"
import {Nav, NavbarContainer, NavLogo, NavMobileIcon, NavItem, NavMenu, NavA} from "./NavbarElements";
import { motion } from 'framer-motion';
import styled from "styled-components";
import DiamondNav from "./diamond-nav";

const svgVariants = {
    hidden: {opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const Navbar = () => {

    return(
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        <motion.svg
                            id="eQld2ikCGP81"
                            viewBox="0 0 300 300"
                            variants={svgVariants}
                            initial="hidden"
                            animate="visible"
                            height="60px"
                            width="60px">
                            <motion.path
                                d="M0,125L0,0h-125c0-69.035594,55.964406-125,125-125s125,55.964406,125,125-55.964406,125-125,125"
                                transform="matrix(-1 0 0 1 150 150)"
                                fill="none"
                                stroke="#000"
                                strokeWidth="15"
                                strokeLinecap="square"
                                strokeDasharray="839.131262"
                                variants={pathVariants}/>
                        </motion.svg>
                    </NavLogo>
                    <NavMobileIcon><i className="fa-solid fa-bars"></i></NavMobileIcon>
                    <NavMenu>
                        <NavItem><NavA className="navItem" href="#welcome">Welcome</NavA></NavItem>
                        <NavItem><NavA className="navItem" href="#aboutme">About me</NavA></NavItem>
                        <NavItem><NavA className="navItem" href="#projects">Projects</NavA></NavItem>
                        <NavItem><NavA className="navItem" href="#contact">Contact</NavA></NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <DiamondNav/>
        </div>
    );
}

export default Navbar;