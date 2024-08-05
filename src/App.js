import React from 'react';
import './App.css'; // Import your styles
import Header from './components/landing-page/Header';
import Main from './components/landing-page/Main';
import Sidebar from './components/landing-page/Sidebar';
import { CustomProvider } from 'rsuite';

export default function App() {
  return (
    <CustomProvider theme='light'>
      <div className='pt-[15vh]'>
        <Header />
        <Main />
      </div>
    </CustomProvider>
  )
}

