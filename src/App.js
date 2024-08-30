import React from 'react';
import './App.css'; // Import your styles
import Dashboard from './components/Dashboard/Dashboard';
import Index from './components/Home/Index';
import Sidebar from './components/Dashboard/Sidebar';
import { CustomProvider } from 'rsuite';
import Learning from './components/Learning/Learning';
import { register } from 'swiper/element/bundle';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyAccount from './components/MyAccount/MyAccount';
//import Library from './VideoLibraryItems'
import L_Middle from './components/Learning/L_Middle';
import VideoLibrary from './components/Learning/VideoLibrary'
import HowToLetsTakeAtrip from './components/Learning/HowToLetsTakeAtrip'
import Login from './components/Onboarding/Login';
import SignUp from './components/Onboarding/SignUp';
import DashboardContainer from './components/Dashboard/DashboardContainer';
// register Swiper custom elements
register();

export default function App() {
  return (
    <CustomProvider theme='light'>
      <div className='min-h-screen'>
        {/** */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
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
    </CustomProvider>
  )
}

