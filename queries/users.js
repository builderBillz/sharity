const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
    try {
      const allUsers = await db.any("SELECT * FROM users");
  
      return allUsers;
    } catch (error) {
      return error;
    }
  };

  const getUser = async (id) => {
    try {
      const user = await db.one("SELECT * FROM users WHERE id=$1", id);//.one returns one item. .any returns an array of one object **sql interpolation**
      //const user = await db.one(`select * from users where ${id} = id)
  
    return user;
    } catch (error) {
      return error;
    }
  };

  const newUser = async (user) => {
    try {
      const newUser = await db.one(
        "INSERT INTO users (username,first_name, last_name, password, email) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [
          user.username,
          user.first_name,
          user.last_name,
          user.password,
          user.email,
        ]
      );
      return newUser;
    } catch (error) {
      return error;
    }
  };
  


  const deleteUser = async (id) => {
    //query method .one
    //DELETE FROM users WHERE id=id, RETURNING*
    try {
      const user = await db.one("DELETE FROM users WHERE id=$1 RETURNING *", id);
    }
    catch(err){
      return err;
    }
  }


  const updateUser = async (id, user) => {
    try {
      const updatedUser = await db.one(
        "UPDATE users SET username=$1, first_name=$2, last_name=$3, password=$4, email=$5 where id=$6 RETURNING *",
        [
          user.username,
          user.first_name,
          user.last_name,
          user.password,
          user.email,
          id,
        ]
      );
      return updatedUser;
    } catch (error) {
      return error;
    }
  };


  module.exports = { 
    getAllUsers, 
    getUser, 
    newUser, 
    deleteUser, 
    updateUser
  };
  