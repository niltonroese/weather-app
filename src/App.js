import React from 'react';
import WeatherApp from './components/WeatherBackground';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainTheme from './container/MainTheme';
import WeatherBackground from './components/WeatherBackground';
import Credits from './components/Credits';
import Settings from './components/Settings'

export default function App() {
  return (
    <Router>
      <MainTheme>
        <Routes>
          <Route exact path= '/' element={<WeatherBackground />} />
          <Route path= '/credits' element={<Credits />} />
          <Route path= '/settings' element={<Settings />} />
        </Routes> 
      </MainTheme>        
    </Router>
  );
}