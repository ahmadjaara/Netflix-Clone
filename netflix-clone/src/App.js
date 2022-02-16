import "./App.css";
import Home from "./components/Home";
import Navbartop from "./components/Navbar";
import Favlist from "./components/Favlist";
import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react';
function App() {
  const [favMovie,setfavMovie]=useState([]);

  useEffect(()=>{
    //https://api.themoviedb.org/3/movie/popular?api_key=7c9d1b7315819e2f2b02a03dcbad4643&language=en-US&page=1
           fetch(`${process.env.React_App_SERVER}/getMovies`)
             .then(res=>{
                 console.log(res)
                 return res.json();
             })
             .then(data=>{
                 let MovieData=data //.results;
                //  let newResult=[];
                //  for(let count of data){
                //      count['comment']='';
                //      count['iscommite']=false;
                //      newResult.push(count)
                //  }
                console.log(MovieData);
                setfavMovie(MovieData);
    
                
             })
    
       },[])

  return (
    <>
      <Navbartop/>
      <Routes>
      <Route path='/' element={<Home />} />
      {favMovie && <Route path='/Favlist' element={<Favlist favMovie={favMovie} />} />}
      </Routes>
    </>
  );
}

export default App;
