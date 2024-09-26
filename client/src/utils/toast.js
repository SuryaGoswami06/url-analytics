import {toast,Bounce} from 'react-toastify'

export default function Tostify(status,msg){
    toast[status](msg, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}