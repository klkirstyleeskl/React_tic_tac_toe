import React, { Component } from 'react';
import Box from '../components/Box';


class GameContainer extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            array: ["-","-","-","-","-","-","-","-","-"]
        }
    }



    handleClick(){

    }

    render(){
        return(
            <div className="game-container">
            <h1>Tic Tac Toe</h1>
            <Box  click={this.handleClick} data={this.state.array}/>
            </div>
        )
    }



}



export default GameContainer;
