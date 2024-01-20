
import { getAuth,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../FIREBASE/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    
    const googleProvider = new GoogleAuthProvider();

// -----------------Sign In-------------------------
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }


// -----------------Sign Out-------------------------
    const handleSignOut = () =>{
        signOut(auth)
            .then((result) => {
            console.log(result);
            setUser(null);
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <div> 
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> :
                <button onClick={handleGoogleSignIn}>Google Login</button>
            }    
            {
               user  && <div>

                        <h2>User: {user.displayName}</h2>
                        <h2>Email: {user.email}</h2>
                        <img src={user.photoURL} alt="" />        
                    </div>

            }
            
        </div>
    );
};

export default Login;