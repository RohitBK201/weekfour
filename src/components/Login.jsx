import { useState } from "react";
import { useNavigate } from "react-router-dom";
import (useState)

export const Login = () => {

  const [reg,setReg]=useState([])

  const [usr,setUsr] = useState("")

  const [pss,setPss] =useState("")

  const navigate = useNavigate();


  console.log(reg)

  return (
    <div>
      <input

        onChange={(e)=>{setUsr(e.target.value)}}

        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input

        onChange={(e)=>{setPss(e.target.value)}}

        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit"

      onClick={()=>{
        
        if(usr=="admin"&&pss=="1234")
        {
          navigate("/orders")
        }
        else
        {
          navigate("/neworder")
        }
 
      }}
      
      >Login</button>
    </div>
  );
};
