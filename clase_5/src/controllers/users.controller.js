// let users = [
//   { id: 1, nombre: "julian" },
//   { id: 2, nombre: "pepe" },
//   { id: 3, nombre: "maria" },
// ];
import userService from "../services/users.service.js";

const getUsers = (req, res) => {
    // try {
        
    // } catch (error) {
        
    // }
  res.send(userService.getUsers());
};

export default { getUsers };
