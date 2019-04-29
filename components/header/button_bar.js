import React, { useRef, useEffect, useState } from 'react'
import Banner from './logo';
import LoginButton from './login_button';
import ActionIcon from './action_icon';

function ButtonBar({ children, separator, fixed }) {
    const elRef = useRef(null);
    const positionRef = useRef(null);
    const [outOfView, setoutOfView] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            if (elRef.current !== null) {
                if (fixed) {
                    if (window.scrollY >= 80) {
                        if (outOfView !== true) {
                            positionRef.current = window.scrollY;

                            setoutOfView(true);
                            return;
                        }
                    }
                }
                if (elRef.current.getBoundingClientRect().top < 0) {
                    if (outOfView !== true) {
                        positionRef.current = window.scrollY;

                        setoutOfView(true);
                        return;
                    }
                }
                if (window.scrollY <= positionRef.current) {

                    setoutOfView(false);
                }
            }
        })
    }, [])


    const navClasses = outOfView ? 'fillMain outofview' : 'fixed fillMain';


    return (
        <nav ref={el => elRef.current = el} className={fixed ? navClasses : 'fillMain'} >
            {fixed &&
            <div className="banner_container">
            <Banner/>
            </div>
            }
            {
                children.map((item, index) => {
                    return (
                        <React.Fragment>
                            {
                                item
                            }
                            {
                                index !== children.length - 1 &&
                                separator
                            }
                        </React.Fragment>
                    )
                })
            }
            {
                fixed &&
                <div  className="extra_containers" >
                <ActionIcon/>
                <ActionIcon/>
                <ActionIcon/>
                <ActionIcon/>
                <LoginButton/>
                
                </div>
            }
            <style jsx>
                {`
            nav {
                display:flex;
                align-items:center;
                width:100%;
                justify-content:center;
                user-select:none;
                color:#8E793E;
                height:50px;
                background: #222;
                margin:0;
            }
            .banner_container{
                position:absolute;
                left:20px;
                animation-name:navappear;
                animation-duration:0.5s;
            }
            .extra_containers{
                position:absolute;
                top:20%;
                right:5%;
                animation-name:navappear;
                animation-duration:1.5s;
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
            .fixed{
                display:none;
            }
            .outofview {
                display:flex;
                transition: 0.2s;
                position:fixed;
                top:0;
                z-index:5000;
                height:50px;
            }
            @keyframes navappear{
                from {
                    opacity:0;
                }
                to {
                    opacity:1;
                }
            }

        `}
            </style>
        </nav>
    )
}

export default ButtonBar
