let users = [
  { id: 1, nombre: "julian" },
  { id: 2, nombre: "pepe" },
  { id: 3, nombre: "maria" },
];

// import userModel from '../models/user.model.js
const getUsers = ()=>{
    // return userModel.find()
    return users
}


export default {getUsers}