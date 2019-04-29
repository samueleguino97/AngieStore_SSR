import React from 'react'
import PageLayout from '../components/layout';

function LoginPage() {
  return (
      <div>
        <form>
          <h4>Registrate</h4>
          <label>
            Nombre
          </label>
          <input type="text" placeholder="Nombre" />
          <label>
            Apellidos
          </label>
          <input type="text" placeholder="Apellidos" />
          <label>
            E-mail
          </label>
          <input type="text" placeholder="Email" />
          <label>
            Password
          </label>
          <input type="password" />
          <button>Registrarse</button>
        </form>
        <form>
          <h4>Inicia Sesion</h4>
          <label>
            E-mail
          </label>
          <input type="text" placeholder="Email" />
          <label>
            Password
          </label>
          <input type="password" />

          <button>Iniciar Sesion </button>
        </form>
        <style jsx>
        {`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus{
          border: 1px solid #8E793E;
          -webkit-text-fill-color: #333;
          -webkit-box-shadow: 0 0 0px 1000px rgba(173,151,79,0.1) inset;
          transition: background-color 5000s ease-in-out 0s;
        }
        form {
          display:flex;
          flex-direction:column;
          flex:1;
          animation-name:slideup;
          animation-duration:0.3s;
          margin:24px;
          border: 2px solid #8E793E;
          padding:16px;
          padding-right:0;
          padding-left:0;
        }
        h4{
          color:#8E793E;
          margin: 12px auto;
        }
        label{

          margin: 0 auto;
          font-size:18px;
        }
        input:focus{
          outline:none;
        }
        button{
          margin-top:12px;
          height:40px;
          width:25%;
          margin: 0 auto;
        }
        input {
          color:#333;
          margin: 0 auto;
          margin-top:8px;
          margin-bottom:8px;
          
          padding: 12px 8px 12px 8px;
          width:60%;
        }
        div {
          display:flex;
          padding-left:15%;
          padding-right:15%;
        }
        button {
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
          display:flex;
          justify-content:center;
          align-items:center;
          height:50px;
        } 
        button:hover{
            background:#fff;
            border: 2px solid #8E793E;
            color: #8E793E;
        }
        @media (max-width: 1000px){
            div {
              flex-direction:column-reverse;
              padding:0;
            }
            button {
              width:40%;
            }
        }
        @keyframes slideup {
          from{ transform: translateY(100%)}
          to {transform:none}
      }
      `}
      </style>
      </div>
      
  )
}

export default LoginPage
