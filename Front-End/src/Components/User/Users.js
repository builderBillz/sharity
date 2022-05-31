import { useEffect, useState } from "react";
import axios from "axios";
// import User from "./User";

function Users() {
  const URL = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, [URL]);

  // const usersDisplay = users.map((user, id) => {
  //   return <User user={user} id={user.id} key={id} />;
  // });

  return <div></div>;
}

export default Users;
