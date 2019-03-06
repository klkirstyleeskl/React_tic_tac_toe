import React, { Component } from 'react';
import Tile from "./Tile"

const  Box = (props) => {

    const data = props.data.map((el) => {
        return <Tile value={el}></Tile>
    })


    function click(){

    }


        return(
            <div className="box-box">
            <div className="box-container">
            {data}
            {/* <div className="box-container">
            <Tile className="Tile-0" value="0" on/>
            <Tile className="Tile-1" value="1"/>
            <Tile className="Tile-2" value="2"/>
            </div>
            <div className="box-container">
            <Tile className="Tile-3" value="3"/>
            <Tile className="Tile-4" value="4"/>
            <Tile className="Tile-5" value="5"/>
            </div>
            <div className="box-container">
            <Tile className="Tile-6" value="6"/>
            <Tile className="Tile-7" value="7"/>
            <Tile className="Tile-8" value="8"/>
            </div> */}
            </div>
            </div>
            
        )
    }



export default Box;