import axios from "axios";
export const fetchUser= async (id)=>{
    try {
        const response= await axios.get("http://localhost:9001/open/Users/"+id); 
        console.log("here")
        console.log(response);

        return await response.data;
    } catch (error) {
        console.log("Error when ftetch books");
        console.log(error)
    }
}
export const fetchUserByUsername= async (userName)=>{
    try {
        const response= await axios.get("http://localhost:9001/open/Users/name/"+userName); 
        console.log("here")
        console.log(response);

        return await response.data;
    } catch (error) {
        console.log("Error when ftetch user by username");
        console.log(error)
    }
}
export const fetchUsers= async ()=>{
    try {
        const response= await axios.get("http://localhost:9001/open/Users/"); 
        console.log("here")
        console.log(response);

        return await response.data;
    } catch (error) {
        console.log("Error when ftetch users");
        console.log(error)
    }
}