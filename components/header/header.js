import Banner from "./logo";
import Head from 'next/head';
import LoginButton from "./login_button";
import ActionIcon from "./action_icon";

function Header() {
    return (
        <header className='root fillMain' >
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet" />
            </Head>
            <Banner />

            <div className="right" >

                <ActionIcon />
                <LoginButton />
            </div>
            <div className="left" >
                <ActionIcon action={() => { window.open('https://www.facebook.com/angies.store.37', '_blank') }} icon="facebook" />
                <ActionIcon icon="google" />
                <ActionIcon icon="whatsapp" />
                <ActionIcon icon="phone" />
            </div>
            <style jsx>
                {`
                    .root {
                        height:80px;
                        display:flex;
                        justify-content: center;
                        width:100%;
                        position:relative;
                        user-select:none;
                        background: #222;
                        margin:0;
                    }
                    
                    h1 {
                        font-size:28px;
                        line-height:60px;
                        justify-self:center;
                        color:#8E793E;
                    }
                    .right{
                        position:absolute;
                        top:70%;
                        right:25%;
                        display:flex;
                    }
                    .left{
                        position:absolute;
                        top:70%;
                        left:25%;
                        display:flex;
                    }
                    #login{

            position:absolute;
            top:70%;
            right:30%;
                    }
                `}
            </style>
            {/* 
                GLOBAL STYLES
            */}
            <style jsx global>
                {`
                    body {
                        margin:0;
                        padding:0;
                        font-family: 'Fira Sans', sans-serif;
                    }
                    .fillMain{
                        background:#fff
                    }
                    @keyframes slideup {
                        from{ transform: translateY(100%)}
                        to {transform:none}
                    }
                `}
            </style>

        </header>
    )
}

export default Header
