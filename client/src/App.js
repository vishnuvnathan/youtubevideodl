import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState("");

  const onChange= (e) =>{
    console.log(e.target.value);
    setUrl(e.target.value);
  }

  const sendURL =()=>{
    
    // axios.get(`http://127.0.0.1:5000/download?URL=${url}`).then(res=>{
    //   console.log(res);
    // })
    window.location.href=`http://127.0.0.1:5000/download?URL=${url}`;
  }
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="./logo.png"/>
        </div>
      </header>
      <div className="container">
          <div className="details">
              <img className="youtube" src="./youtube.png"/>
            <h2>
                Youtube downloader
            </h2>
          </div>
            <input type="text" placeholder="  Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q"
                  onChange={(e)=>onChange(e)}/>
            <button onClick={()=>sendURL()}>convert </button>
      </div>
    </div>
  );
}

export default App;
