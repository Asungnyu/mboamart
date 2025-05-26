// created this for testing file for test, edit as needed

const API_URL = "http://localhost:8000/login"
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