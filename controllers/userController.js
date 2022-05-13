const express = require("express");

const { getAllUsers, getUser, newUser, deleteUser, updateUser} = require("../queries/users");

const users = express.Router();

users.get("/", async (request, response) => {
    console.log("GET request to /users");
    const allUsers = await getAllUsers();
    if (allUsers.length === 0) {//if there are no users, give err
      response.status(500).json({ error: "User not found." });
      return;
    }
    //else
    response.status(200).json(allUsers); //return all users
  });


  //SHOW 
 users.get("/:id", async (request, response) => {
    console.log("GET request to /users/:id");
    const user = await getUser(request.params.id);
    response.status(200).json(user);
  }); //get one user

  //Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }


//DELETE
users.delete("/:id", async (request, response) => {
    const deletedUser = await deleteUser(request.params.id);
    //returns deleted User
    console.log(deletedUser)
    if(!deletedUser){
    response.status(200).json(deletedUser);
    } //if the id exists, respond.
    else{
    response.status(404).json('Users not found');
    } //if it doesnt exist, respond with error code
    })

   //NEW
    users.post("/", async (request, response) => {
        const user = await newUser(request.body);
        response.status(200).json(user);
      }); //create new user

      //UPDATE
      users.put("/:id", async (request, response) => {
        const updatedUser = await updateUser(request.params.id, request.body);
        if(updatedUser.id) {
        response.status(200).json(updatedUser)
        }
        else {
        response.status(404).json(updatedUser);
        }
        });


      module.exports = users;