import Link from 'next/link'

function LoginButton() {
    return (
        <Link href='/login' >
            <div>
                Login
      <style jsx>
                    {`
        div {
            padding-left:20px;
            padding-right:20px;
            padding-top:5px;
            padding-bottom:5px;
            cursor:pointer;
            border: 2px solid #fff;
            color: #fff;
            background:#8E793E;
            transition: all 0.5s;
            font-size:14px;
        } 
        div:hover{
            background:#fff;
            border: 2px solid #8E793E;
            color: #8E793E;
        }
      `}
                </style>
            </div>
        </Link>
    )
}

export default LoginButton
