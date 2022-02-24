import {Link} from "react-router-dom";
import '../css/navbar.css'

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                   <Link to='/'><button className="button">HOME</button></Link> 
                </li>

                <li>
                    <Link to='/funkos/new'><button className="button">NEW</button></Link>
                </li>

                <li>
                    <Link to='/funkos'><button className="button">FUNKOS</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;