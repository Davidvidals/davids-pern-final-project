import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const API = process.env.REACT_APP_API_URL

function EditFunko(){
    const [funko, setFunko] = useState({

    })
    const {index} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/funkos/${index}`)
        .then((res)=>{
            setFunko(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[index])

    const handleTextChange = (event) =>{
        setFunko({ ...funko, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`${API}/funkos/${index}`, funko)
        .then(()=>{
            navigate('/funkos')
        }).catch((err)=>{
            console.log(err)
        })
    };
    return(
        <div className='edit-form'>
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

export default EditFunko;