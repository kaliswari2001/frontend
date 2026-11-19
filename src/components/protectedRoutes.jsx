import {  useNavigate } from "react-router-dom";
const protectedRoutes = () => {
    const navigate = useNavigate({children});
    const token = localStorage.getItem("token");
    if(!token)
    {
        navigate("/");
    }
    return children;
  
}

export default protectedRoutes;
