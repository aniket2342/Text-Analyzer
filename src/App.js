import logo from './logo.svg';
import './App.css';
import Form from "./Com/Form.js";
import Navbar from "./Com/Navbar.js";

function App() {
  return (
   <>
   <div>
   <Navbar /> 
   </div>
   <div className="container my-3"> 
   <Form heading="Enter Random Number"/>
   </div>
   
   </>
  );
}

export default App;
