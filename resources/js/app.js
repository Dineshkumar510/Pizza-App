import axios from 'axios';
import moment from 'moment';
import { initAdmin } from './admin';

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


//Remove alert message after x seconds
const alertMsg = document.querySelector('#success-alert');
if(alertMsg){
    setTimeout(()=> {
        alertMsg.remove()
    }, 2000)
};



//Change order status
let statuses = document.querySelectorAll('.status_line');
let hiddenInput = document.querySelector('#hiddenInput');
let order = hiddenInput ? hiddenInput.value : null;
order = JSON.parse(order);
let time = document.createElement('small');


function updateStatus(order) {
    statuses.forEach((status)=> {
        status.classList.remove('step-completed')
        status.classList.remove('current')
    })
    let stepCompleted = true;
    statuses.forEach((status)=> {
        let dataProp = status.dataset.status
        if(stepCompleted){
            status.classList.add('step-completed')
        }
        if(dataProp === order.status){
            stepCompleted = false
            time.innerText = moment(order.updatedAt).format('hh:mm A')
            status.appendChild(time)
            if(status.nextElementSibling){
                status.nextElementSibling.classList.add('current')
            }
        }
    })
};

//calling updateStatus function with params: order
updateStatus(order);


//Socket connection
let socket = io()

//join
if(order) {
    socket.emit('join', `order_${order._id}`)
}
let adminAreaPath = window.location.pathname
if(adminAreaPath.includes('admin')) {
    initAdmin(socket);
    socket.emit('join', 'adminRoom')
} 

socket.on('orderUpdated', (data)=> {
    const updatedOrder = {...order}
    updatedOrder.updatedAt = moment().format()
    updatedOrder.status = data.status
    updateStatus(updatedOrder)
    Toastify({
        text: "order Updated",
        duration: 1500,
        backgroundColor: "#F82C00 ",
        className: "info"
    }).showToast();
})

