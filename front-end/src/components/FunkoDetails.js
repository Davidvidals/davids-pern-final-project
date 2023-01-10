import { useState , useEffect } from "react";
import {Link ,  useNavigate , useParams} from "react-router-dom";
import axios from "axios";
import '../css/details.css'

const API = process.env.REACT_APP_API_URL;

function FunkoDetails(){
    const [funko, setFunko] = useState({});
    let {index} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(API + '/funkos/' + index)
        .then((res)=>{
            setFunko(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [index]);

    const handleDelete=()=>{
        axios.delete(API + '/funkos/' + index)
        .then((res)=>{
            navigate('/funkos')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div>
            <section id="product-info">
                <div class="item-image-parent">
                    <div class="item-image-main">
                    <img src={funko.image} alt={funko.name}/>
                    </div>
                </div>

                <div class="item-info-parent">
                    <div class="main-info">
                    <h4 className="product-title">{funko.name}</h4>
                        <div class="star-rating">
                            <span>★★★★</span>★            
                        </div>
                        <p>Price:<span id="price"> ${funko.price}.00</span></p>
                    </div>

                 <div className='navigation'>
                    <div>
                        <Link to={'/funkos'}>
                            <button className="nav_button">BACK</button>
                        </Link>
                    </div>

                    <div>
                        <Link to={`/funkos/${funko.id}/edit`}>
                            <button className="nav_button">EDIT</button>
                        </Link>
                    </div>

                    {/* <div>
                        <button onClick={handleDelete} className="nav_button">DELETE</button>
                    </div> */}
                </div>
                </div>


            </section>
        </div>
    )
}
export default FunkoDetails;