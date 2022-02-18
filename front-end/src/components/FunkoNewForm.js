import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function NewFunko(){
    let navigate = useNavigate();
    const[funko,setFunko]= useState({
        name: '',
        price: 0 ,
        edition: '',
        image: ''
    });

    const addSnack =()=>{
        axios.post(`${API}/funkos`,funko)
        .then(
            ()=>{
                navigate(`/funkos`)
            },
            (err)=>console.log(err)
        )
        .catch((c)=>{console.warn('catch',c)})
    }

    const handleTextChange =(event)=>{
        setFunko({...funko, [event.target.id]: event.target.value})
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        addSnack();
    }

    return(
        <div className='new'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                    <input
                    id='name'
                    value={funko.name}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Name of POP!'
                />
                
                <label htmlFor='price'>Price:</label>
                    <input
                    id='price'
                    value={funko.price}
                    type='number'
                    onChange={handleTextChange}
                    placeholder=''
                />

                <label htmlFor='edition'></label>
                    <input
                    id='edition'
                    value={funko.edition}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Edition'
                />

                <label htmlFor='image'>Image:</label>
                    <input
                    id='image'
                    value={funko.image}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='http://'
                    pattern='http[s]*://.+'
                />

                <input type = 'submit' />
     
            </form>
        </div>
    )
}

export default NewFunko;