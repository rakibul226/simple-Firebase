import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../FIREBASE/firebase.init";
import { useState } from "react";
import { IoEye,IoEyeOffSharp } from "react-icons/io5";

const Registration = () => {


  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassField, setShowPassField] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email,password,accepted);


    if(password.length < 6){
      setRegisterError('Password can not be less then 6 characters');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Password should have at least one uppercase character');
      return;
    }
    
    else if(!accepted){
      setRegisterError('Accept out Terms and condition to continue')
      return;
    }


    //Reset Success
    setSuccess('');
    //reset Error
    setRegisterError('');

    //Create User
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
      setSuccess("User Created successfully");

      //update profile'
      updateProfile(result.user,{
        displayName: name,
        photoURL: "https://example.com"
      })

      //send verification email
      sendEmailVerification(result.user)
       .then(() =>{
        alert('Please check your email and verify your account')
       })
    })
    .catch(error => {
      console.error(error);
      setRegisterError(error.message);
    })
  };

  return (

    <>
        <div className=" flex  lg:flex-row-reverse h-screen items-center justify-center gap-10" 
                         style={{ height: "calc(100vh - 75px)" }}>

          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
            {
                registerError && <p className="text-red-600 text-xl ">{registerError}</p>
              }
              {
                success && <p className="text-green-600 text-xl ">{success}

                  </p>
              }
            </p>
          </div>

          <div className="card shrink-0 p-3 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="form-control relative">
              <form onSubmit={handleLogin}>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div>

                <input type={ showPassField ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                
                <span className="absolute text-2xl pl-3 pt-3 right-3" onClick={() => setShowPassField(!showPassField)}>
                  {
                  showPassField ? <IoEyeOffSharp /> : <IoEye /> 
                  }      
                </span>
                </div>

                

                  <div className="pt-7">
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2"><a href="">Terms and Conditions</a></label>
                  </div>
                <input className="btn btn-secondary bg-pink-600 text-xl  mb-4 w-full mt-1 hover:text-white hover:bg-blue-500 border-none" type="submit" value="Sign Up" />
              </form>
              
            </div>
          </div>
          
        </div>
    </>
  );
};

export default Registration;
