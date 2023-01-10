import {Link} from "react-router-dom";
import '../css/navbar.css'

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                <Link to='/'>
                    <div class="fancy" >
                        <span class="top-key"></span>
                        <span class="text">Home</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                    </div>
                   </Link> 
                </li>

                <li>
                    <Link to='/funkos/new'>
                    <div class="fancy" >
                        <span class="top-key"></span>
                        <span class="text">Submissions</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                    </div>
                    </Link>
                </li>

                <li>
                    <Link to='/funkos'>
                    < div class="fancy" >
                        <span class="top-key"></span>
                        <span class="text">FUNKOS</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                    </div>
                    </Link>
                </li>

                <li>  
                    <Link to='/Cart'>  
                    < div class="fancy" >
                        <span class="top-key"></span>
                        <span class="text">MY CART</span>
                        <span class="bottom-key-1"></span>
                        <span class="bottom-key-2"></span>
                    </div> 
                    </Link>                
                </li>

            

            </ul>
        </nav>
    )
}

export default Navbar;