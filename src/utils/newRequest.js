import axios from "axios"
 const newRequest = axios.create({
    baseURL:"https://myserverbackend.onrender.com/api/",
    withCredential:true,
})
export default newRequest;
