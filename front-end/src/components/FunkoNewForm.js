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


            <div class="form__group field">
                <input  placeholder="name" class="form__field" type="input" onChange={handleTextChange}  id='name' value={funko.name}/>
                <label class="form__label" htmlfor="name">Funko Pop Name</label>
            </div>


            <div class="form__group field">
                <input  placeholder="price" class="form__field" type="input" onChange={handleTextChange}  id='price' value={funko.price}/>
                <label class="form__label" htmlfor="price">Price</label>
            </div>

            <div class="form__group field">
                <input  placeholder="edition" class="form__field" type="input" onChange={handleTextChange}  id='edition' value={funko.edition}/>
                <label class="form__label" htmlfor="edition">Edition</label>
            </div>

            <div class="form__group field">
                <input  placeholder="image" class="form__field" type="file" onChange={handleTextChange}  id='image' value={funko.image}/>
                <label class="form__label" htmlfor="image">Image</label>
            </div>
            
            <div class="form__group field">
                <input  placeholder="description" class="form__field" type="input" onChange={handleTextChange}  id='description' value={funko.description}/>
                <label class="form__label" htmlfor="description">Description</label>
            </div>
 
            <div class="form__group field">
                <input  placeholder="featured" class="form__field" type="input" onChange={handleTextChange}  id='featured' value={funko.featured}/>
                <label class="form__label" htmlfor="featured">Featured</label>
            </div>


                <input type = 'submit' onSubmit={handleSubmit}/>
     
            </form>
        </div>
    )
}

export default NewFunkoForm;