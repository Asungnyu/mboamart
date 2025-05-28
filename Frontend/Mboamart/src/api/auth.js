// created this for testing file for test, edit as needed

const API_URL = "http://127.0.0.1:8000/all_vendors"
export const login = async (e)=>{
    let API_OPTIONS = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": "tayu@gmail.com",
            "password": "tayu673",
        })
       
    }
    const res = await fetch(`${API_URL}`,API_OPTIONS)

    if (res.status == 200){
         const data = await res.json();
        console.log(data)
    }else{
        console.log("an error occured")
    }
   
     e.preventDefault();
}

export const get_all_vendors = async (e)=>{
    let API_OPTIONS = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbWVyeSIsImV4cCI6MTc0ODM1OTkyNH0.9qJrDsnQ6m3cxQPmz2Un_h2actWYmSVph6bwen1TCPA"
        }
    }
    const res = await fetch(`${API_URL}`,API_OPTIONS)

    if (res.status == 200){
         const data = await res.json();
        console.log(data)
    }else{
        console.log("an error occured")
    }
   
     e.preventDefault();
}