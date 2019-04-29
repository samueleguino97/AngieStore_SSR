import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { iconFactory } from '../../utils';
function ActionIcon({ icon='cart' ,action=()=>{}}) {
  let SelectedIcon = iconFactory(icon);

  return (
    <div onClick={action} >
      <SelectedIcon />
      <style jsx>
        {`
        div {
          height:24px;
          width:24px;
          border:1px solid #8E793E;
          color:#8E793E;
          display:flex;
          justify-content:center;
          align-items:center;
          cursor:pointer;
          margin:4px;
          transition: all 0.3s;
        }
        div:hover {
          border:1px solid #8E793E;
          color:#fff;
          background:#8E793E
        }
       `}
      </style>
    </div>
  )
}

export default ActionIcon
