import cart from "../images/trolley.png"
import "../components/nav.css"
const Nav =() =>{
    return(
        <nav>
            <img src={cart} alt="cart" className="nav_image" />
            <h1 className="nav_header">Product Manager</h1>
            
        </nav>
    );
}

export default Nav;