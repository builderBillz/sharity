const express = require("express");

const { getAllUsers, getUser, newUser, deleteUser, updateUser, getLoggedUser} = require("../queries/users");

const users = express.Router();

users.get("/users", async (request, response) => {
  console.log("GET request to /users");
  const allUsers = await getAllUsers();
  if (allUsers.length === 0) {//if there are no users, give err
    response.status(500).json({ error: "User not found." });
    return;
  }
  //else
  response.status(200).json(allUsers); //return all users
});

users.post("/", async(request, response) =>{
  console.log("get logged user")
  const user = await getLoggedUser(request.body);
  console.log(request.body)
  if(user.username){
    response.status(202).json(user.username);
  } else {
    response.status(400).json("Error User not Found")
  }
})

  //SHOW 
 users.get("/users/:id", async (request, response) => {
    console.log("GET request to /users/:id");
    const user = await getUser(request.params.id);
    response.status(200).json(user);
  }); //get one user

  //Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }


//DELETE
users.delete("/users/:id", async (request, response) => {
    const deletedUser = await deleteUser(request.params.id);
    //returns deleted User
    if(deletedUser){
     console.log(deletedUser)
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
      users.put("/users/:id", async (request, response) => {
        const updatedUser = await updateUser(request.params.id, request.body);
        if(updatedUser.id) {
        response.status(200).json(updatedUser)
        }
        else {
        response.status(404).json(updatedUser);
        }
        });



      module.exports = users;