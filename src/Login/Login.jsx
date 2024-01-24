
import {GithubAuthProvider,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { getAuth,GithubAuthProvider,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// FacebookAuthProvider
// import app from "../FIREBASE/firebase.init";
import auth from "../FIREBASE/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user,setUser] = useState(null)
    // const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // const fbProvider = new FacebookAuthProvider();

// -----------------Google Sign In-------------------------
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


//----------------Github Sign In-------------------------
    const handleGithubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })

    }

// -----------------Facebook Sign In-------------------------
// const handleFacebookSignIn = () => {
//     signInWithPopup(auth, fbProvider)
//     .then(result => {
//         const loggedInUser = result.user;
//         console.log(loggedInUser);
//         setUser(loggedInUser);
//     })
//     .catch(error => {
//         console.log('error', error.message);
//     })
// }


// -----------------Sign Out-----------------------------
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
        <div className="text-6xl"> 
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> :
                <div>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                    {/* <button onClick={handleFacebookSignIn}>Facebook Login</button> */}

                </div>
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