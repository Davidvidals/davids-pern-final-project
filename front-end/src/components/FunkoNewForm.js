import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/newForm.css'
const API = process.env.REACT_APP_API_URL;

function NewFunkoForm(){
    let navigate = useNavigate();
    const[funko,setFunko]= useState({
        name: '',
        price: 0 ,
        edition: '',
        image: '',
        description:'',
        featured: false
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
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='name'>Name:</label>
                    <input
                    id='name'
                    value={funko.name}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Name of POP!'
                    className='user-input'
                />
                
                <label htmlFor='price'>Price:</label>
                    <input
                    id='price'
                    value={funko.price}
                    type='number'
                    onChange={handleTextChange}
                    placeholder=''
                    className='user-input'
                />

                <label htmlFor='edition'></label>
                    <input
                    id='edition'
                    value={funko.edition}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Edition'
                    className='user-input'
                />

                <label htmlFor='image'>Image:</label>
                    <input
                    id='image'
                    value={funko.image}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='http://'
                    className='user-input'
                />
                <label htmlFor='description'>Description:</label>
                    <input
                    id='description'
                    value={funko.description}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Description'
                    className='user-input'
                />
                  <label htmlFor='featured'>Featured:</label>
                    <input
                    id='featured'
                    value={funko.featured}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Featured'
                    className='user-input'
                />

                <input type = 'submit' onSubmit={handleSubmit}/>
     
            </form>
        </div>
    )
}

export default NewFunkoForm;