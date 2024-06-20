import React, { useState,useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Solution.css"

export default function Solution(props){
    const [solution, setSolution] = useState([])
    // going with the equation x^2 - 5x + 6 as the temp data
    // maybe if quadratic equation place an image of what that is just in case
    console.log("props in solutions ", props.isSolutionsButton)

    useEffect(() => {
        const tempData = ["(x-2)(x-3)", ["x = 2","x = 3"]];
        setSolution(tempData);
      }, []); // Empty array means this effect runs once on mount
    // will have to dynamically set the accordions
    
    return (
            props.isSolutionsButton && (
                <div className="solution">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Step 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {solution[0]}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Solutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography
                dangerouslySetInnerHTML={{
                    __html: `
                    <ul id="solutions_list">
                        <li>${solution[1] && solution[1][0]}</li>
                        <li>${solution[1] && solution[1][1]}</li>
                        
                    </ul>
                    `,
                }}
            />
        </AccordionDetails>
      </Accordion>
    </div>
            )
        )
}