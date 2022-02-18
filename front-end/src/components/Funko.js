import {Link} from "react-router-dom";

function Funko({funko}){
    return(
        <div>
            <img src={funko.image} alt={funko.name}/>
            <Link to = {`/funkos/${funko.id}`}/>
            <h2>{funko.name}</h2>
        </div>
    )
}

export default Funko;