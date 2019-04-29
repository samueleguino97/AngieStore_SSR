import React from 'react'
import Header from '../header/header';
import ButtonBar from '../header/button_bar';
import NavButton from '../header/nav_button';

function PageLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            <ButtonBar >
                <NavButton to="/" text="Home" />
                <NavButton to="/contact" text="Contact" />
                <NavButton to="/about" text="About" />
                <NavButton to="/shop" text="Shop" />
            </ButtonBar>
            <ButtonBar fixed >
                <NavButton to="/" text="Home" />
                <NavButton to="/contact" text="Contact" />
                <NavButton to="/about" text="About" />
                <NavButton to="/shop" text="Shop" />
            </ButtonBar>
            {
                children
            }
        </React.Fragment>
    )

}

export default PageLayout
