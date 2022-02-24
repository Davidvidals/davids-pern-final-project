import { useState , useEffect } from "react";
import {Link ,  useNavigate , useParams} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function FunkoDetails(){
    const [funko, setFunko] = useState({});
    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(API + '/funkos/' + id)
        .then((res)=>{
            setFunko(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [id]);

    const handleDelete=()=>{
        axios.delete(API + '/funkos/' + id)
        .then((res)=>{
            navigate('/funkos')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div>
            <div>
                <h3>{funko.name}</h3>
                <img src={funko.image} alt={funko.name}/>
                <h5>Price:</h5>
                <h5>Edition:</h5>
            </div>

            <div className='navigation'>
                <div>
                    <Link to={'/funkos'}>
                        <button>BACK</button>
                    </Link>
                </div>

                <div>
                    <Link to={`/funkos/${funko.id}/edit`}>
                        <button>EDIT</button>
                    </Link>
                </div>

                <div>
                    <button onClick={handleDelete}>DELETE</button>
                </div>
            </div>
        </div>
    )
}
export default FunkoDetails;