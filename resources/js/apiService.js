import axios from 'axios';

export function placeOrder(formObject) {
    axios.post('/orders', formObject).then((res)=>{
        console.log(res.data)
        Toastify({
            text: res.data.message,
            duration: 1500,
            backgroundColor: "#F82C00 ",
            className: "info"
        }).showToast();

        setTimeout(()=> {
            window.location.href = '/customer/orders';
        }, 1000);

    }).catch((error)=> {
        Toastify({
            text: error.res.data.message,
            duration: 1500,
            backgroundColor: "#F82C00 ",
            className: "info"
        }).showToast();
    })
}