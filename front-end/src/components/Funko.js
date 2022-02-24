import {Link} from "react-router-dom";
import '../css/card.css'
import Featured from "./Featured";

function Funko({funko}){
    return(

            <div className="card">

                <div className="card_head">
                    <div className="card_image">
                    {/* <Link to = {`/funkos/${funko.id}`}> */}
                    <div class="image-wrapper">
                    <div class="media">
                    <div class="overlay"></div>
                    <Link to = {`/funkos/${funko.id}`}><img src={funko.image} alt={funko.name}/><Featured featured={funko.featured}/></Link>
                    <div class="image-details">
                    <Link to = {`/funkos/${funko.id}`}><p>{funko.name}</p></Link>
                    </div>
                    </div>
                    </div>
                    {/* </Link> */}
                    </div>
                </div>

                <div className="card_body">
                    {funko.description}
                </div>
                <div className="wrapper">
                    <div className="card_price">
                        Price: ${funko.price}.00
                    </div>
                    <div className="card_edition">
                        Edition: {funko.edition}
                    </div>
                </div>
                

            </div>



     






        
    )
}

export default Funko;