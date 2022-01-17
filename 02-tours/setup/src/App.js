import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
 
  const removeTour = (id) => {
    const newTour= tours.filter((tour)=> tour.id!==id);
    setTours(newTour);
  }
  const fetchTours = async () => {
    setLoading(true);
    try{
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    }
    catch(e){
      setLoading(false);
      console.log(e);
    }    
  }

  useEffect( ()=>{
    fetchTours();
  },[]);
  
  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    );
  }
  if(tours.length == 0){
    return(
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
    
  }
  return (<main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>);
}

export default App
