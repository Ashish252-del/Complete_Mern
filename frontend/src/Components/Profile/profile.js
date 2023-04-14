import React , {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await axios.get("/logout");
    //  console.log(res);
       navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  }
    const callAboutPage = async () => {
     try {
         const res = await axios.get("/about");
         if ((res).data.success === true) console.log(res);
         if (!res.status === 200) {
             const error = new Error(res.error);
             throw error;
        }
     } catch (error) {
        navigate("/Login");
         console.log("we are getting an error")
        
     }
 } 

    useEffect(() => {
        callAboutPage();
    }, []);

  return (
    <div>this is my profile
      <button onClick={()=>{logout()}}>Log out</button>
    </div>
  )
}
