import React, { Component } from 'react';
import Tile from "./Tile"

class Box extends Component{




    render(){
        return(
            <div>
            <div className="box-container">
            <Tile className="Tile-0">Tile0</Tile>
            <Tile className="Tile-1">Tile1</Tile>
            <Tile className="Tile-2">Tile2</Tile>
            </div>
            <div className="box-container">
            <Tile className="Tile-3">Tile3</Tile>
            <Tile className="Tile-4">Tile4</Tile>
            <Tile className="Tile-5">Tile5</Tile>
            </div>
            <div className="box-container">
            <Tile className="Tile-6">Tile6</Tile>
            <Tile className="Tile-7">Tile7</Tile>
            <Tile className="Tile-8">Tile8</Tile>
            </div>
            </div>
            
        )
    }
}



export default Box;