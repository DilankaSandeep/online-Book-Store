import axios from "axios";

export const createOrder = async (data) => {

    try {
        console.log(data)
        const response = await axios.post('http://localhost:9001/orders',data);
        console.log(data)
        return response.data;
    } catch (error) {
        console.log(error);   
    }

}