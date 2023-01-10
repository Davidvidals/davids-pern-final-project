import { useState , useEffect } from "react";
import {Link ,  useNavigate , useParams} from "react-router-dom";
import axios from "axios";
import '../css/cart.css'

const API = process.env.REACT_APP_API_URL;

function MyCart(){
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

    <main id="cart-body">
        <div class="basket">

        <div class="basket-labels">
            <ul>
            <li class="item item-heading">Item</li>
            <li class="price">Price</li>
            <li class="quantity">Quantity</li>
            <li class="subtotal">Subtotal</li>
            </ul>
        </div>

        <div class="basket-product">
            <div class="item">

            <div class="product-image">
               <img src={funko.image} alt={funko.name}/>
            </div>

            <div class="product-details">
                <h1><strong><span class="item-quantity"></span></strong> {funko.name}</h1>
            </div>
            </div>
            <div class="price"> ${funko.price}.00</div>
            <div class="quantity">
            <input type="number" value="1" min="1" class="quantity-field"/>
            </div>
            <div class="subtotal"> ${funko.price}.00</div>

        </div>
        </div>
        <aside>
        <div class="summary">
            <div class="summary-total-items"><span class="total-items"></span> Items in your Bag</div>
            <div class="summary-subtotal">
            <div class="subtotal-title">Subtotal</div>
            <div class="subtotal-value final-value" id="basket-subtotal">130.00 (placeholder)</div>  

            </div>
            <div class="summary-delivery">
            <select name="delivery-collection" class="summary-delivery-selection">
                <option value="0" selected="selected">Select Delivery</option>
                <option value="collection">Eco-friendly Shipping - Free</option>
                <option value="first-class">2-day shipping - $10.00</option>
                <option value="second-class">Same-day Delivery - $25.00</option>
                <option value="signed-for">International shipping - TBD</option>
            </select>
            </div>
            <div class="summary-total">
            <div class="total-title">Total</div>
            <div class="total-value final-value" id="basket-total">$130.00</div>
            </div>
            <div class="summary-checkout">
            <button class="checkout-cta">Go to Secure Checkout</button>
            </div>
        </div>
        </aside>
    </main>



        </div>
    )
}
export default MyCart;