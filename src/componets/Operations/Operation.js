import React, { useState } from "react";
import Button from '@mui/material/Button'
import "./Operations.css"

export default function Operations(props){
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <div className="operations">
            <Button variant="contained"
                sx={{
                    height:'7vh',
                    borderRadius: '1vw',
                    width:'7vw',
                    backgroundColor:"black"
                }}
            >
                Operations
            </Button>
        </div>
    )
}