import "../Shop/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./style.css";
import { RiCloseFill } from "react-icons/ri";
export default function Cart() {
   
  return (
    
    <div id="header-commerce-cart">
        <div id="header-commerce-cart-quantity">Cart({this.props.myCart.length})</div>                    
                        
    </div>
                  
  );
}
