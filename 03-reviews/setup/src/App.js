import React from 'react';
import Review from './Review';
function App() {
 return (
   <main>
    <section>
     <div className="conainer">
       <div className="title">
         <h2>Our reviews</h2>
         <div className="underline"></div>
         <Review />
       </div>
     </div>
     </section>
   </main>
 );
}

export default App;
