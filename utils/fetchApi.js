import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export  const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
    'X-rapidAPI-Host': 'bayut.p.rapidapi.com',
       'X-rapidAPI-Key': 'd245cf245cmshfdb3fd592c26a4ep1df538jsn4d5832691120'
 }
})
    return data
}