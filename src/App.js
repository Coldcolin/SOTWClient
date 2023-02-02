import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
// import { useStateContext } from './Contexts/ContextProvider';
import "./App.css"
import Dashboard from './Dashboard/Dashboard';
import Registration from './Pages/Registration/Registration';
import Login from "./Pages/Login/Login.jsx";


function App() {
  // const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  return (
    <div>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />}/>
        <Route path="/Reg" element={<Registration/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
