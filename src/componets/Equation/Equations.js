import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import "./Equation.css"

export default function Equations(props){
    return(
       <div className="equation">
            <TextField 
                id="equation-here" 
                label="Enter Equation" 
                variant="outlined" 
                sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '2vw', 
                      width: '50vw',
                      height:'3vw'
                    },
                    '& .MuiOutlinedInput-input': {
                      textAlign: 'center', // Center the text
                    }
                  }}
            />
            <Button 
                variant="contained"
                sx={{
                    position: 'relative', // Position the button relative to its normal position
                    left: '-3vw', // Move the button to the left
                    padding:".75vw",
                    borderRadius: '1vw',
                    width:'6vw',
                    backgroundColor:'#354f88',
                    ':hover': {
                        backgroundColor: 'black', // Adjust this value to set the hover color
                      },
                }}
            >
                Solve
            </Button>
       </div> 
    )
}

