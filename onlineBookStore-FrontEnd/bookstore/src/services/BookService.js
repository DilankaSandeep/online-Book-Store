import axios from "axios";
export const fetchBooks= async ()=>{
    try {
        const response= await axios.get("http://localhost:9001/open/books"); 
        console.log(response);

        return await response.data;
    } catch (error) {
        console.log("Error when ftetch books");
        console.log(error)
    }
}
export const fetchBooksByCategoery= async (category_id)=>{
    try {
        const response= await axios.get("http://localhost:9001/open/books/categories/"+category_id); 
        console.log(response);

        return await response.data;
    } catch (error) {
        console.log("Error when ftetch books");
        console.log(error)
    }
    
}
export const fetchBook= async (book_id)=>{
    try {
        const response= await axios.get("http://localhost:9001/open/books/"+book_id); 
        console.log(response);

        return await response.data;
    } catch (error) {
        console.log("Error when ftetch books");
        console.log(error)
    }
}

