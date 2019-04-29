import React from 'react'
import ProductInfo from './product_info';

function FeaturedProduct() {
    return (
        <main>
            <img
                src={'https://picsum.photos/850/450'}
            />
            <div>
                <ProductInfo />
            </div>
            <section className="product-info" >
                <p>
                    Este producto es super bueno, esta hecho con materiales de buena calidad y tiene buen precio
                </p>
            </section>

            <style jsx>
                {`
                    main {
                        position:relative;
                        height: 500px;
                        width: 90%;
                        padding:12px;
                    }
                    img {
                        object-fit:cover;
                        height:55vh;
                        width:55vw;
                        animation-name:appear;
                        animation-duration:3s;
                        transition: all 1s;
                        box-shadow: 0 0 20px 2px #111;
                        border-radius:8px;
                    }
                    img:hover {
                        transform:scale(1.05);
                    }
                    .product-info {
                        background-color:#fff;
                        position:absolute;
                        right:20%;   
                        top:40%;
                        height:20%;
                        width:30%;
                        opacity:1;
                        padding:12px;
                        user-select:none;
                        color:#AD974F;
                        box-shadow:0 3px 5px 2px #333; 
                        animation-name:appear;
                        animation-duration:1s;
                        border-radius:8px;
                        transform:scale(0.8);
                        transition: all 1s;
                    }
                    .product-info:hover {
                        transform:scale(1);
                    }
                    div{
                        width:300px;
                        padding:5px;
                        position:absolute;
                        top:2%;
                        right:-8%;

                    }
                    p{

                        margin:24px;
                        opacity:1;
                        text-align:center;
                    }
                    .product-specifications{
                        display:flex;
                        width:90%;
                        align-items:center;
                        height:30%;
                    }
                    ul{
                        flex:1;
                        list-style:none;
                        text-align:center;
                        font-size: 16px;
                    }

                @media (max-width: 1100px){
                    div{
                        top:10%;
                    }
                   .product-info {
                       right:50%;
                       top:75%;
                       height:25%;
                   } 
                   .product-specifications{
                       height:20%;
                   }
                }
                @media (max-width: 850px){
                    img{
                        width:80vw;
                    }
                    font-size:12px;
                    .product-info {
                        width:80%;
                       height:20%;
                       top:45%;
                       right:25%;
                    }
                    div{
                        top:-5%;
                    }
                }

                    @keyframes appear {
                        from {opacity:0}
                        to {opacity:1}
                    }
                `}
            </style>
        </main>
    )
}

export default FeaturedProduct
