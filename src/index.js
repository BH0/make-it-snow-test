import React from "react"
import Particles from 'react-particles-js';

const MakeItSnow = (WrappedComponent) => { 
    const particleConfig = {
	    "particles": {
	        "number": {
	            "value": 260,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
  }
  
  const background = { 
        backgroundColor: "grey", 
        opacity: 0.24
    }

    const styling = { 
        position:"absolute",
        top: 0
    } 

    return props => { 
        return (
            <div style={background}>  
                <h1>HI</h1> 
                <Particles style={styling} params={particleConfig} />                
                <WrappedComponent style={styling} {...props} /> 
            </div> 
        )
    }
}

export default MakeItSnow; 