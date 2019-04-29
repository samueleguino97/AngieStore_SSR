import LoginButton from '../header/login_button';
import ShopButton from './shop_button';

function ProductInfo() {
  return (
    <div>
      <h3>Nombre del producto</h3>
      <section>
        <p>
          Gucci - Color Blanco - Individual: <span>16.99 Bs</span>
        </p>
        <div style={{display:'flex',justifyContent:'center'}} >
          <ShopButton />
        </div>
        <p>
          Gucci - Color Negro - 5 piezas: <span>25.99 Bs</span>
        </p>
        <div style={{display:'flex',justifyContent:'center'}} >
          <ShopButton />
        </div>
      </section>
      <style jsx>
        {`
        div{
          background-color:#fff;
          width:100%;
          padding-bottom:8px;
          animation-name:slideinleft;
          animation-duration:1s;
          height:17vh;
        }
        h3 {
          color:#AD974F;
          padding:5px;
          margin:0;
          font-size:18px;
          text-align:center;
          box-shadow: 0 2px 2px 1px #ccc;
        }
        section{
          padding-top:8px;
          diplay:flex;
          width:100%;
          flex-direction:column;
          background-color:#fff;
        }
        p{
          font-size: 14px;
          font-weight: bold;
          margin:12px;
          width:100%;
        }
        span{
          color:#AD974F;
          font-weight:bolder;
          position:absolute;
          right:15px;
        }
        @media (max-width: 1100px){
          div{
            height:5vh;

          }
        }
        @media (max-width: 850px){
          
          div{
              width:75%;
              position:relative;
          }
          p{
            font-size: 10px;
          }
          h3 {
            font-size:12px;
          }
      }

        @keyframes slideinleft {
          
          from {opacity:0;transform:translateY(-100%)}
          to {opacity:1;transform:none}
      }
      `}
      </style>
    </div>
  )
}

export default ProductInfo
