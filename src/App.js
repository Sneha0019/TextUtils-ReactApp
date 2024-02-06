
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');  //whether dark mode is abled or disabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type,
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  };
  
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-primary");

  // }


  const toggleMode = ()=>{
    // if(cls!=="light" && ){
    //   console.log("helper");
    //   helper();
    // }
    // if(cls!=="light" && cls!=="dark"){
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add("bg-"+cls);
    // }
     if(mode==="light"){
      // removeBodyClasses();
      // console.log(cls);
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enable", "success"); 
      }else{
      // removeBodyClasses();
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Ligh Mode has been enabled", "success")
    }
  }


  // for green Mode
    const toggleMode2 = ()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor = "#50623A";
      showAlert("Dark Mode has been enable", "success");
      // document.body.style.color = "white";
      }else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "#212529";
      showAlert("Ligh Mode has been enabled", "success")
    }
  }

//for red Mode
  const toggleMode3 = ()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor = "#A94438";
      showAlert("Dark Mode has been enable", "success");
      // document.body.style.color = "white";
      }else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "#212529";
      showAlert("Ligh Mode has been enabled", "success")
    }
  }

  return (
    <>

    <BrowserRouter>
    <Navbar tittle="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3}/>
    <Alert alert={alert}/>
    <div className="container my-3">   
        
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert}  heading="Try TextUtils-word Counter, Character Counter, Remove extra spaces" mode={mode} toggleMode={toggleMode}/>}/>
          {/* <TextForm showAlert={showAlert}  heading="Enter text to analyse below" mode={mode} toggleMode={toggleMode}/>
          </Route> */}
          <Route exact path="/about" element={<About mode={mode}/> }/>
          </Routes>
        </div>
        

    </BrowserRouter>
    </>
  );
}

export default App;
