const express = require('express')
const app = express();

const todo = [
    {
        name:"item1",
        description:"description of item1",
        imageURL:"image url of item 1",
        completed:false,
        _id:1
    },
    {
        name:"item2",
        description:"description of item2",
        imageURL:"image url of item 2",
        completed:true,
        _id:2
    }
]


app.get("/todo",(req,res)=>{
    return res.status(200).send({
        success:true,
        message:"list",
        todo:todo
    })
});


app.post("/addItem",(req,res)=>{
    const item = {
        
        name:req.body.name,
        description:req.body.description,
        imageURL:req.body.imageURL,
        completed:req.body.completed,
        _id:todo.length + 1
    };
    todo.push(item);
    return res.status(200).send({
        success:true,
        message:"item added successfully",
        item
    });
});





app.put("/updateTodo/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedList= {
        name:req.body.name,
        description:req.body.description,
        imageURL:req.body.imageURL,
        completed:req.body.completed,
        _id:id
    };
    for (let i = 0; i < todo.length; i++) {
    if (todo[i].id === id) {
    todo[i] = updatedList;
    return res.status(201).send({
    success: true,
    message: "item updated successfully",
    updatedUser
    });
    }
    }
    return res.status(404).send({
    success: true,
    message: "error in update"
    });
    })




app.delete("delete/:id",(req,res)=>{
    const id = parseInt(req.params.id, 10);
    const updatedList= {
        name:req.body.name,
        description:req.body.description,
        imageURL:req.body.imageURL,
        completed:req.body.completed,
        _id:id
    };
    for (let i = 0; i < todo.length; i++) {
    if (todo[i].id === id) {
    todo[i].splice(i,1);
    return res.status(201).send({
    success: true,
    message: "item added successfully",
    updatedList
    });
    }
    }
    return res.status(404).send({
    success: true,
    message: "error in update"
    });
    });



    




app.get('/', (req, res) => {
res.send('Welcome to learn backend with express!')
});
app.listen(8000, () => {
console.log('Example app listening on port 8000!')
});