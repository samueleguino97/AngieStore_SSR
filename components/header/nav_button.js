import React from 'react'
import Link from 'next/link'

function NavButton({ text,to }) {
    return (
        <Link href={to}>
            <section>
                {
                    text
                }
                <style jsx>
                    {`
                    section {
                        padding:4px;
                        min-width:48px;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        margin-right:4px;
                        margin-left:4px;
                        cursor: pointer;
                        transition: all 0.2s;
                        position:relative;
                        user-select:none;
                    }
                    section:hover {
                        transform:scale(1.09);
                    }
                `}
                </style>
            </section>
        </Link>
    )
}

export default NavButton
