import { MdShop, MdShoppingCart, } from "react-icons/md";
import {FaFacebook, FaGoogle, FaWhatsapp, FaGooglePlus, FaGooglePlusG, FaPhone} from "react-icons/fa"


export const iconFactory =(icon="cart")=>{
    switch (icon) {
        case 'cart':
            return MdShoppingCart;
        case 'facebook':
        return FaFacebook;
        case 'google':
        return FaGooglePlusG;
        case 'whatsapp':
        return FaWhatsapp;
        case 'phone':
        return FaPhone;
        default:
        return null;
    }
 
}