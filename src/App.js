// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js' ;
import {useState} from "react"
// import About from './components/About.js'

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert ({
      msg : message,
      type : type});
  }
  const toggleMode=()=>{
    if(Mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("DarkMode has been enabled", "success");
      document.title = "Dark Mode";
      setInterval(()=>{
          document.title = "install my app"
      }, 1500);
      setInterval(()=>{
          document.title = "you are using TextUtils"
      }, 2000);
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert( "whiteMode has been enabled" ,"success");
      document.title = "Light Mode" ;
      setInterval(()=>{
        document.title = "install my app"
      }, 1500);
      setInterval(()=>{
          document.title = "you are using TextUtils"
      }, 2000);
      }

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>   
      <Navbar title="TextUtils Blog" abouttext = "About information"  toggleMode= {toggleMode} mode ={Mode}/>
      <Alert alert={alert}/>
      <div className = "container my-3">
          <TextForm heading="write here to analyze below" mode = {Mode}/>
          {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
