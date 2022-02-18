import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>

                <li>
                    <Link to='/funkos/new'>NEW</Link>
                </li>

                <li>
                    <Link to='/funkos'>FUNKOS</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;