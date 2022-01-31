import React from 'react';

function defaultLayout(props) {
  return(
       <div>
           <div className="header bs1">
               <div className="d-flex justify-content-between">

                   <h1>SS BikeRental</h1>

        

               </div>

           </div>
           <div className="content">
               {props.children}
           </div>
  
      </div>
  );
}

export default defaultLayout;
