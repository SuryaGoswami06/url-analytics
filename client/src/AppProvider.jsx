import React from "react";
import AppRoutes from "./routes/AppRoutes";
import store from './store/store'
import {Provider} from 'react-redux'

function AppProvider(){
  return (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
    
  )
}
export default AppProvider