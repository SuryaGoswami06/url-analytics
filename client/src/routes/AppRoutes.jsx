import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

const Applayout = React.lazy(()=>import('../layout/Applayout')) 
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Links = React.lazy(() => import('../pages/Links'));
const QrCodes = React.lazy(() => import('../pages/QrCodes'));
const Settings = React.lazy(() => import('../pages/Settings'));
const Analytics = React.lazy(() => import('../pages/Analytics'));
const Register = React.lazy(() => import('../pages/Register'));
const Login = React.lazy(() => import('../pages/Login'));
const BillingNPlans = React.lazy(() => import('../pages/BillingNPlans'));
const Account = React.lazy(() => import('../pages/Account'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Navigate to='dashboard' />}></Route>
          <Route path="/" element={<Applayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="links" element={<Links />} />
            <Route path="qr-codes" element={<QrCodes />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="billings-and-plans" element={<BillingNPlans />} />
            <Route path="my-account" element={<Account />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
