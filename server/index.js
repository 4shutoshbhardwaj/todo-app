import express from 'express';
import todos from './routes/todos.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app=express();

const port=8080;

app.use(cors());
app.use(express.json());
const url="mongodb+srv://admin:admin123@todo.9sntzne.mongodb.net/Todo?retryWrites=true&w=majority";


mongoose.connect(url,{
    useNewUrlParser:true
})

const connection=mongoose.connection;



connection.once("open",()=>console.log('mongodb connected'));

app.use('/',todos);

app.listen(port,()=>console.log(`server started at ${port}`));