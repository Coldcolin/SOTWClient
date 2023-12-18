import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
// import { useStateContext } from './Contexts/ContextProvider';
import "./App.css"
import Dashboard from './Dashboard/Dashboard';
import Registration from './Pages/Registration/Registration';
import Login from "./Pages/Login/Login.jsx";
import ScrollToTop from "./Components/ScrollTop"
import ForgotPassword from './Pages/Recovery/ForgotPassword.jsx';
import ResetPassword from './Pages/Recovery/ResetPassword.jsx';


function App() {
  // const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  return (
    <div>
    <HashRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/*" element={<Dashboard />}/>
        <Route path="/Reg" element={<Registration/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Forgot" element={<ForgotPassword/>} />
        <Route path="/reset/:id" element={<ResetPassword/>} />
      </Routes>
      </ScrollToTop>
    </HashRouter>
    </div>
  );
}

export default App;
