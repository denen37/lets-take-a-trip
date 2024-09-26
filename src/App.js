import React from 'react';
import './App.css'; // Import your styles
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './pages/HomePage';
// import { CustomProvider } from 'rsuite';
import Learning from './components/Learning/Learning';
import { register } from 'swiper/element/bundle';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyAccount from './components/MyAccount/MyAccount';
import L_Middle from './components/Learning/L_Middle';
import VideoLibrary from './components/Learning/VideoLibrary'
import HowToLetsTakeAtrip from './components/Learning/HowToLetsTakeAtrip'
import Login from './features/login/Login';
import SignUp from './features/signup/SignUp';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import ForgotPassword from './components/Auth/ForgotPassword';
import PreDashboard from './components/Dashboard/PreDashboard';
import VisaApplicationPage from './components/Visa/VisaApplicationPage';
import Logout from './components/Dashboard/Logout';
import TourBooking from './components/Tour/TourBooking';
import Notification from './components/Notification/Notification';
import NotificationContainer from './components/Notification/NotificationContainer';

// register Swiper custom elements
register();

export default function App() {
  return (
    // <CustomProvider theme='light'>
    <div className='min-h-screen bg-[#F7F7F7]'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/visa' element={<VisaApplicationPage />} />
        <Route path='/notification' element={<NotificationContainer />} />
        <Route path='/tour' element={<TourBooking />} />
        <Route path='predashboard' element={<PreDashboard />} />
        <Route path="/dashboard" element={<DashboardContainer />} >
          <Route index element={<Dashboard />} />
          <Route path="account" element={<MyAccount />} />
        </Route>
        <Route path="/learning" element={<Learning />} >
          <Route index element={<L_Middle />} />
          <Route path="video_library" element={<VideoLibrary />} />
          <Route path="how_to_lets_take_a_trip" element={<HowToLetsTakeAtrip />} />
        </Route>
      </Routes>
    </div>
    // </CustomProvider>
  )
}

