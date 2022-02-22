import React from "react"
import {Footer, ContactRow, Contact} from "./FooterElements";
import "./Footer.css";

const Navbar = () => {

    return(
        <div>
            <div className="gradient4"/>
            <Footer>
                <div id="contact" className="section">
                    <ContactRow>
                        Contact me:
                    </ContactRow>
                </div>
            </Footer>
        </div>
    );
}

export default Navbar;