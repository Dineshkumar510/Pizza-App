import axios from 'axios';
import session from 'express-session';

let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');

function updateCart(pizza){
    axios.post('/update-cart', pizza)
    .then((res)=>{
        cartCounter.innerText = res.data.totalQty;

        Toastify({
            text: "Added to Cart🤤",
            duration: 1500,
            backgroundColor: "linear-gradient(to right, #fe5f1e, #F09819)",
            className: "info"
        }).showToast();

    })
    .catch((err)=>{

        Toastify({
            text: "Something Went Wrong!😟",
            duration: 1500,
            backgroundColor: "#F82C00 ",
            className: "info"
        }).showToast();

    })
};

addToCart.forEach((btn)=>{
    btn.addEventListener('click', (event)=> {
        let pizza = JSON.parse(btn.dataset.pizza);
        updateCart(pizza);
    })   
});
