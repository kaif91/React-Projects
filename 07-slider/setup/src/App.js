import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [people,setPeople]= useState(data);
  const [index,setIndex] = useState(0);
  useEffect(()=>{
    const lastIndex = people.length-1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index>lastIndex){
      setIndex(0);
    }
  },[index,people]);

  useEffect(()=>{
    let slider =setInterval(()=>{
      setIndex(index+1);
    },3000);
    return ()=> clearInterval(slider);
  })
  return (
    <section className="section">
      <div className="title">
      <h2>
        <span></span> reviews
      </h2>
      </div>
      <div className="section-center">
        {people.map((p,pindex)=>{
          const {id,image,name,title,quote} = p;
          
          let position = 'nextSlide';
          if(pindex === index){
            position='activeSlide';
          }
          if(pindex ===index-1 || (index === 0 && pindex === people.length-1)){
            position='lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article> 
          );
        })}
        <button 
        onClick={()=>setIndex(index-1)}
        className='prev'>
          <FiChevronLeft />
        </button>
        <button 
        onClick={()=>setIndex(index+1)}
        className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
