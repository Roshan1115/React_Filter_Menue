import React from 'react'
import Button from '@material-ui/core/Button';


const yelloButton = {
  color: "#fff",
  backgroundColor: "#c88e15"
}

const Options = (props) => {
  return(<>
      <Button variant="contained" color="primary" 
      style={yelloButton}
      onClick={() => props.filter(props.title)}
      >
      {props.title}
      </Button>
 </> )
}

export default Options;