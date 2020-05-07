import axios from "axios"


export const axiosWithAuth =()=> {
    const token = localStorage.getItem("Authorization");
    const user_id = localStorage.getItem("user_id")



    return axios.create ({
        headers: {
            "Content-Type": "application/json",
           'Authorization': `${token}`,
           'user_id':` ${user_id}`
           
        },
    });
}