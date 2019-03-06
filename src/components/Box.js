import React, { Component } from 'react';
import Tile from "./Tile"

const  Box = (props) => {

    const data = props.data.map((el) => {
        return <Tile value={el} click={props.click}></Tile>
    })


    function click(){
        console.log("vaffanculo")
    }


        return(
            <div className="box-box">
            <div className="box-container">
            {data}
            </div>
            </div>
            
        )
    }



export default Box;