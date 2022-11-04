import React from 'react'
import {Box, Typography, TextField, Button, styled} from '@mui/material';
import axois from 'axios';


const AddPlusButton=styled(Button)`
    width:20px;
    height:45px;
    margin-left:20px;
    margin-bottom:5px;
    font-size:30px;
    background-color:#8E4DE7;
    color:white;
    &:hover{
        color:black;
        border:1px solid black
    }
`

const clicked=({val})=>{
  const data={
    todo:val
  }
  axois.post('http://localhost:8080/add',data)
  .then(()=>console.log('added'))
  .catch(()=>console.log('from frontend while adding'));
}

const AddButton = ({val}) => {
  return (
    <AddPlusButton onClick={clicked}>+</AddPlusButton>
  )
}

export default AddButton