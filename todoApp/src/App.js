import react,{useState} from 'react';
import logo from './logo.svg';
import {Box, Typography, TextField, styled} from '@mui/material';
import './App.css';
import CompInput from './components/compInput/CompInput';
import AddButton from './components/compInput/AddButton';
import Repeat from './components/Table.jsx/Repeat';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const OuterDiv=styled(Box)`
    width:400px;
    height:500px;
    border:1px solid red;
    padding:20px;
  `
  
  const Heading=styled(Typography)`
    font-weight:600;
  `
  const [data,setData]=useState([]);
  useEffect(()=>{
    setData(axios.get('http://localhost:8080/'))
  },[])
  
 

  return (
    <div>
      <OuterDiv style={{}}>
        <Heading variant="h5">Todo App</Heading>
        <CompInput/>
        {
          data.length==0?<h1>Loading</h1>:data.map((el)=>(
          <Repeat el={el}/>
          ))
        }
      </OuterDiv>
    </div>
  );
}

export default App;