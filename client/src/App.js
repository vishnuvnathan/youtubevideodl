import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/ClipLoader"

function App() {
  const [url, setUrl] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true)
  const onChange= (e) =>{
    console.log(e.target.value);
    setUrl(e.target.value);
  }

  const sendURL =(e)=>{
    e.preventDefault();
    setClicked(true);
    axios.get(`/videourl?URL=${url}`).then(res=>{
      console.log(res);
      setVideoList(res.data.formats);
      
    })
    // window.location.href=`http://127.0.0.1:5000/download?URL=${url}`;
  }

  const downLoadVideo = (url) =>{
    window.location.href=url;
  }


  useEffect(() => {
    
  }, [])
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
            <form onSubmit={(e)=>sendURL(e)}>
              <input type="text" placeholder="  Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q"
                    onChange={(e)=>onChange(e)} required/>
              <input className="submit-button" type="submit" value="Convert" />
            </form>
              {
                  clicked==true?
                  (videoList && videoList.length==0 )?
                      <div className="loader">
                          <PacmanLoader
                            size={100}
                            color={"#D9271D"}
                            loading={loading}
                            margin={2}
                          />
                      </div>
                      :
                      <Scrollbars style={{height:"calc(100vh - 270px)"}}> 
            
                      <div className="download-label-container">
                      
                        {
                          videoList.map((item,index) => {
                            
                            if(item.qualityLabel){
                              let type=item.mimeType.toString().split(";")[0].split("/")[1];
                              return(
                                <div className="download-label">
                                  <span className="type">{type}  {item.qualityLabel}</span>
                                  <a className="download" href={item.url} target="_blank" download onClick={()=>downLoadVideo(item.url)}>Download</a>
                                </div>
                              )
                            }
                            else
                              return null;
                            
                          })
                        }
                      
                      </div>
                      </Scrollbars>
                      :null
                    
              }
            
            
  
            
      </div>
    </div>
  );
}

export default App;
