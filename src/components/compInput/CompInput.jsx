import React,{useState} from 'react'
import {Box, Typography, TextField, styled} from '@mui/material';
import AddButton from './AddButton';

const CompInput = () => {

    const [val,setVal]=useState("");

    const typing=(e)=>{
        console.log(e.target.value);
        setVal(e.target.value);
    }

    const inputStyle={
        width:'77%',
        height:40,
        fontSize:20,
        borderRadius:5,
        border:"2px solid black"
    }


  return (
    <>
    <input style={inputStyle} type="text" value={val} onChange={(e)=>typing(e)} />
    <AddButton val={val} />
    </>
  )
}

export default CompInput