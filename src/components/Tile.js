import React from 'react';


const Tile = (props) => {



    function click(){
        console.log("vaffanculo")
    }


     return(
        <button className="button" onClick={click}>  {props.value}  </button>
            
      )
    
}






export default Tile