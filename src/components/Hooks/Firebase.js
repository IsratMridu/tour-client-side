import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";
import { GoogleAuthProvider,  getAuth, signInWithPopup, onAuthStateChanged, signOut,  createUserWithEmailAndPassword  } from "firebase/auth";




firebaseInitialization();

const auth = getAuth();


const googleProvider = new GoogleAuthProvider();

// const facebookProvider = new FacebookAuthProvider();

// const githubProvider = new GithubAuthProvider();

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

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
        // console.log(result.user);
    
    
  })
    }

  //   const facebookLogin = () =>{
  //       signInWithPopup(auth, facebookProvider)
  // .then((result) => {
  //   console.log(result.user);

   
  // })
  //   }


//    const  handleGithubLogin = () =>{

//     signInWithPopup(auth, githubProvider)
//   .then((result) => {
   
//     console.log(result.user);
    
//   })

//     }


  // 

    const handleLogout = () =>{
        signOut(auth).then(() => {
            setUser({});
          })

    }



    



    const handleRegister = (event) => {
      event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        
    
        console.log(result.user);
  })
    }


    

    

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
          });

    },[])




    return {handlePassword, handleEmail,  handleGoogleSignIn, user, handleLogout, handleRegister};
}

export default useFirebase;