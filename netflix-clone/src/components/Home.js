import { useState,useEffect } from 'react';
import MovieList from './MovieList';
import ModalMovie from './ModalMovie';

function Home (){
   const [movies,setMovies]=useState(null);
   
   useEffect(()=>{
       fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c9d1b7315819e2f2b02a03dcbad4643&language=en-US&page=1')
         .then(res=>{
             return res.json();
         })
         .then(data=>{
             let MovieData=data.results;
            console.log(MovieData);
            setMovies(MovieData);
            
         })

   },[])
   const updatecommit=(data,id)=>{
       let updatemovie= movies.map(ele=>{
           if(ele.id===id){
               ele.comment=data.usercommit;
               return ele;
           }else return ele;
           
       })
       setMovies(updatemovie);
   }
    return (
        <>
        <h1>
         NetfliP 
        </h1>
        {movies && <MovieList data ={movies} updatecommit={updatecommit}/>}
        
        </>
    )
};
export default Home;