import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Applayout from '../layout/Applayout'
import Hero from '../pages/Hero'
const Dashboard = React.lazy(()=>import('../pages/Dashboard'))
const Links = React.lazy(()=>import('../pages/Links'))
const QrCodes = React.lazy(()=>import('../pages/QrCodes'))
const Settings = React.lazy(()=>import('../pages/Settings'))
const Analytics = React.lazy(()=>import('../pages/Analytics'))
const Register = React.lazy(()=>import('../pages/Register'))
const Login = React.lazy(()=>import('../pages/Login'))
const BillingNPlans = React.lazy(()=>import('../pages/BillingNPlans'))
const Account = React.lazy(()=>import('../pages/Account'))

function AppRoutes() {
  return (
    <Router>
      <Routes>
          <Route element={<Applayout />}>
              <Route path='' element={<Hero />}>
                  <Route index path='dashboard' element={<Dashboard/>} />
                  <Route path='links' element={<Links/>}  />
                  <Route path='qr-codes' element={<QrCodes />} />
                  <Route path='analytics' element={<Analytics/>}/>
                  <Route path='settings' element={<Settings />} />
                  <Route path='register' element={<Register/>} />
                  <Route path='login' element={<Login/>}/>
                  <Route path='billings-and-plans' element={<BillingNPlans/>} />
                  <Route path='my-account' element={<Account/>} />
              </Route>
          </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes