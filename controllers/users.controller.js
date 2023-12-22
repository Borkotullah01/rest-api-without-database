let users = require("../models/users.model");
const {v4:uuidv4} = require("uuid");

// get user
const getAllUser = (req,res)=>{ 
    res.status(200).json(users); // এখানে status code 200 মানে ok
};
// create user
const createUser = (req,res)=>{
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(users); // কোন কিছু creat করতে status code 201 দিতে হবে।
};
// update user
const updateUser = (req,res)=>{
    const userid = req.params.id;
    const {username,email} = req.body;
    users.filter((user)=> user.id === userid).map((selectedUser)=>{
        selectedUser.username = username;
        selectedUser.email = email;
    });
    res.status(202).json(users); // কোন কিছু update Accepted করতে status code 202 দিতে হবে।
};
// delete user
const deleteUser = (req,res)=>{
    const userid = req.params.id;

    users = users.filter((user)=> user.id !== userid);
    res.status(200).json(users); // কোন কিছু Delete Ok করতে status code 200 দিতে হবে।
};

module.exports = {getAllUser, createUser, updateUser, deleteUser};