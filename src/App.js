
import './App.css';
import Navbar from './Components/Navbar.js'
import TextArea from './Components/TextArea';
import Alerts from './Components/Alerts';
import React,{useState} from 'react'
import AboutUs from './Components/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';

function App() {
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert('Darkmode has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Lightmode has been enabled', 'success')
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }
  const [mode, setMode]= useState('light')
  const [alert, setAlert]= useState(null)
  const textComp=<div className="container mt-3"><TextArea textMain="form-label" Exampletextarea="Enter Your Text Below to Covert" showAlert={showAlert} mode={mode}/></div>
  return (
    <>  
    <Router>
      <Navbar title="Text Utilz" mode={mode} toggleMode={toggleMode} ></Navbar>
      <Alerts alert={alert}/>
        <Routes>
          <Route path="/" element={textComp}></Route>
          <Route path="/aboutus" element={<AboutUs mode={mode}/>}/>
        </Routes>
    </Router>
    </>
        
  );
}

export default App;