import { useState,useEffect } from 'react';
import MovieList from './MovieList';



function Home (){
   const [movies,setMovies]=useState(null);
   
   useEffect(()=>{
//https://api.themoviedb.org/3/movie/popular?api_key=7c9d1b7315819e2f2b02a03dcbad4643&language=en-US&page=1
       fetch(`${process.env.React_App_SERVER}/trending`)
         .then(res=>{
             console.log(res)
             return res.json();
         })
         .then(data=>{
             let MovieData=data //.results;
             let newResult=[];
             for(let count of data){
                 count['comment']='';
                 count['iscommite']=false;
                 newResult.push(count)
             }
            console.log(MovieData);
            setMovies(MovieData);

            
         })

   },[])

   const updatecommit=(data,id)=>{
       let updatemovie= movies.map(ele=>{
           if(ele.id===id){
               ele.comment=data.usercommit;
               ele.iscommite=!ele.iscommite;
               return ele;
           }else return ele;
           
       })
       setMovies(updatemovie);
   }
    return (
        <>
         
        {movies && <MovieList data ={movies} updatecommit={updatecommit}/>}
       
        </>
    )
};
export default Home;