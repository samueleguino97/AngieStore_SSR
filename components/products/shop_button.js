import Link from 'next/link'

function ShopButton() {
    return (
        <Link href={'products?productid'} >
            <div>
                Shop Now
      <style jsx>
                    {`
        div {
            width:80px;
            height:20px;
            padding:8px;
            cursor:pointer;
            background:#fff;
            border: 2px solid #8E793E;
            color: #8E793E;
            transition: all 0.3s;
            align-self:center;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        div:hover{
            border: 2px solid #8E793E;
            color: #fff;
            background:#8E793E;
        }
        @media (max-width: 850px){
          
            div{
                padding:4px;
            }
        }
      `}
                </style>
            </div>
        </Link>
    )
}

export default ShopButton
