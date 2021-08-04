import axios from 'axios';

export function placeOrder(formObject) {
    axios.post('/orders', formObject).then((res)=>{
        Toastify({
            text: res.data.message,
            duration: 2000,
            backgroundColor: "#F82C00 ",
            className: "info"
        }).showToast();

        setTimeout(()=> {
            window.location.href = '/customer/orders';
        }, 1000);

    }).catch((error)=> {
        Toastify({
            text: "Something Went Wrong😰",
            duration: 2000,
            backgroundColor: "#F82C00 ",
            className: "info"
        }).showToast();
    })
}