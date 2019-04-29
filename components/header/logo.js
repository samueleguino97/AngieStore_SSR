import React from 'react'
import Link from "next/link";

function Banner() {
    return (
        <section className="main_banner" >
            <Link href={'/'} >
                <h1>
                    Angie's Store
                </h1>
            </Link>
            <style jsx>
                {`
                h1{
                    font-size:32px;
                    color:#8E793E;
                    font-family: 'Great Vibes', cursive;
                    cursor:pointer
                }
                `}
            </style>
        </section>
    )
}

export default Banner
