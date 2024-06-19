import React, { useState } from "react";
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import "./Operations.css"

export default function Operations(props){
    const [showOps,setShowOps] = useState(false)
    console.log(showOps)
    function showOperations(){
        setShowOps(!showOps)
        console.log(showOps)

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
                        color:"black"
                    }}
                >
                    Op 1
                </Button>
                <Button
                    sx={{
                        borderColor: "black",
                        color:"black"
                    }}
                >
                    Op 2
                </Button>
                <Button
                    sx={{
                        borderColor: "black",
                        color:"black"
                    }}
                >
                    Op 3
                </Button>

            </ButtonGroup>

            )}


        </div>
    )
}