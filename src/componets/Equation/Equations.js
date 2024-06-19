import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import "./Equation.css"


export default function Equations(props){
    const [input, setInput] = useState('');
    
    
    return(
       <div className="equation">
            <TextField 
                id="equation-here" 
                label="Enter Equation" 
                variant="outlined" 
                value = {input}
                onChange = {(e)=>setInput(e.target.value)}
                sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '2vw', 
                      width: '50vw',
                      height:'3vw'
                    },
                    
                  }}
            />
            <Button 
                variant="contained"
                onClick={()=>{props.setEquation(input)}}  

                sx={{
                    position: 'relative', 
                    left: '-3vw', 
                    padding:".75vw",
                    borderRadius: '1vw',
                    width:'6vw',
                    backgroundColor:'#354f88',
                    ':hover': {
                        backgroundColor: 'black', 
                      },
                    
                }}
                
            >
                Solve
            </Button>
       </div> 
    )
}

