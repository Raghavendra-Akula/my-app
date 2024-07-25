// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  return (
    <>   
      <Navbar title="TextUtils Blog" abouttext = "About information"/>
      <div className = "container my-3">
          <TextForm heading="write here to analyze below"/>
      </div>
      
    </>
  );
}

export default App;
