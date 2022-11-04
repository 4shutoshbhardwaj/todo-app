import express from 'express';
const todos=express.Router();
import Todo from '../models/todo.js'

todos.get('/',(req,res)=>{
    Todo.find()
    .then((article)=>res.json(article))
    .catch("Error in getting")
})

todos.post('/add',(req,res)=>{
    const NTodo=new Todo({
        todo:req.body.todo
    })
    NTodo.save()
    .then(()=>res.json("The new article added successfully!"))
    .catch("Error in post")
})

todos.delete('/',(req,res)=>{
    Todo.remove()
    .then(()=>res.json("The article is deleted successfully"))
    .catch("Error in deleting all")
})

todos.delete('/:id',(req,res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json("The article is deleted successfully"))
    .catch("Error in deleting single")
})




export default todos;