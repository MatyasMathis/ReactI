import logo from './logo.svg';
import './App.css';
import {Welcome} from "./components/Welcome";
import {useState} from "react";
import {Counter} from "./components/Counter";
import {Orders} from "./views/Orders";

function App() {
  const [value, setValue]=useState();
  const handleChangeInput=(event)=>{
      setValue(event.target.value);
  }
  return (
      <div>
          <div className={"header"}>
              <Welcome name={value}/>
              <input  onChange={handleChangeInput}/>
          </div>


          <Orders/>


      </div>

);
}

export default App;
