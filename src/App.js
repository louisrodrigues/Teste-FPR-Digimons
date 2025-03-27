import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';


import Routes from './Routes';


const Page = (props) =>{
return (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
  );
}

export default Page;