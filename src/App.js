import {useEffect} from "react";

//d8ce203
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d8ce203';

const App = () => {

const searchMovies = async(title)=>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  console.log(data.Search);
}


useEffect(()=>{
  searchMovies('Lord of the rings');
},[]);

  return ( 
   <h1>Hello</h1>
   );
}
 


export default App;