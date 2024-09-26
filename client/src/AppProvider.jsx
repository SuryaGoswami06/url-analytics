import React from "react";
import AppRoutes from "./routes/AppRoutes";
import store from './store/store'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function AppProvider(){
  return (
    <Provider store={store}>
        <ToastContainer />
        <AppRoutes />
    </Provider>
    
  )
}
export default AppProvider