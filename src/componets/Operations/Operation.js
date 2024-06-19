import React, { useState } from "react";
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import "./Operations.css"
import plusSign from "../../images/plus_sign.png"
import subtractionSign from "../../images/subtraction_sign.png"
import equalSign from '../../images/equal_sign.png'
import xSquared from '../../images/x_squared.png'


export default function Operations(props){
    const [showOps,setShowOps] = useState(false)
    
    function showOperations(){
        setShowOps(!showOps)
    }

    
    return(
        <div className="operations">
            <Button variant="contained"
                sx={{
                    height:'7vh',
                    borderRadius: '1vw',
                    width:'8vw',
                    backgroundColor:"black",
                    fontSize: '1vw',
                    ':hover': {
                        backgroundColor: '#354f88', // Adjust this value to set the hover color
                      },
                    
                }}
                onClick={showOperations}
            >
                Operations
            </Button>
            
            {showOps &&(
                <ButtonGroup variant= 'outlined'>
                <Button
                    sx={{
                        borderColor: "black",
                        color:"black",
                        backgroundImage:`url(${plusSign})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
    
                </Button>
                <Button
                    sx={{
                        borderColor: "black",
                        color:"black",
                        backgroundImage:`url(${subtractionSign})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    
                </Button>
                <Button
                    sx={{
                        borderColor: "black",
                        color:"black",
                        backgroundImage:`url(${equalSign})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    
                </Button>
              

            </ButtonGroup>

            )}


        </div>
    )
}