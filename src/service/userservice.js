import axios from "axios";

//for signup
export async function saveUser(formData){
    try {
        const response=await axios.post("http://localhost:5001/User",formData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//for login
export async function login(credentials){
    const response=await axios.post("http://localhost:5001/User/login",credentials);
    return response.data;
}

// //order data
// export async function order(orderData){
//   const response=await axios.post("http://localhost:5001/api/myorderData",orderData);
//   return response.data;
// }




