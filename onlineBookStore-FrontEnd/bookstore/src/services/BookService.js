import axios from "axios";
export const fetchBooks= async ()=>{
    try {
        const response= await axios.get("http://localhost:9001/open/books"); 
        console.log("here")
        console.log(response);

        return await response.data;
    } catch (error) {
        console.log("Error when ftetch books");
        console.log(error)
    }
}

