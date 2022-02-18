import axios from 'axios';
import {useState, useEffect} from 'react';
import Funko from './Funko';

const API = Process.env.REACT_APP_API_URL;

function AllFunkos(){
    const [funko, setFunkos] = useState([]);

    useEffect(()=>{
        axios.get(API + '/funkos')
        .then((res)=>{
            setFunkos(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            {funko.map((funko)=>{
                return <Funko key={funko.id} funko={funko}/>
            })}
        </div>
    )
}

export default AllFunkos;