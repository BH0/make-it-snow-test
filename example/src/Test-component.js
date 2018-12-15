import React, { Component } from "react" 
import MakeItSnow from 'make-it-snow-test'

class TestComponent extends Component { 
    render() { 
        return ( 
            <div className="centered height-100px">   
                <span><h2>LET IT SNOW</h2></span> 
            </div> 
        )
    }
}

export default MakeItSnow(TestComponent)  