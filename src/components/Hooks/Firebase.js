import { useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";

firebaseInitialization();

const useFirebase = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user, setUser] = useState({});

    

    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }
    
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }

    const handleLogin = (event) =>{
        event.preventDefault();
        console.log(email, password);
        
    }




    return {handlePassword, handleEmail, handleLogin};
}

export default useFirebase;