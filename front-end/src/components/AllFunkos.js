import axios from 'axios';
import {useState, useEffect} from 'react';
import Funko from './Funko';
import '../css/card.css'


const API = process.env.REACT_APP_API_URL;

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
        <div className='container'>
            {funko.map((funko)=>{
                return <Funko key={funko.index} funko={funko}/>
            })}
        </div>
    )
}

export default AllFunkos;