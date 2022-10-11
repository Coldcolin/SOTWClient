import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './Contexts/ContextProvider';
import "./App.css"
import Dashboard from './Dashboard/Dashboard';
import Registration from './Pages/Registration/Registration';

function App() {
  // const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />}/>
        <Route path="/Reg" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
