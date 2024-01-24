import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../FIREBASE/firebase.init";
import { useState } from "react";
import { IoEye,IoEyeOffSharp } from "react-icons/io5";

const HeroLogin = () => {


  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassField, setShowPassField] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
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
      setSuccess("User Created successfully")
    })
    .catch(error => {
      console.error(error);
      setRegisterError(error.message);
    })
  };

  return (
    <div className="px-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>

          <div className="card shrink-0 p-3 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="form-control relative">
              <form onSubmit={handleLogin}>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div>

                <input type={ showPassField ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                
                <span className="absolute text-2xl pl-3 top-1/2 right-3" onClick={() => setShowPassField(!showPassField)}>
                  {
                  showPassField ? <IoEyeOffSharp /> : <IoEye /> 
                  }      
                </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>

                  <div>
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2"><a href="">Terms and Conditions</a></label>
                  </div>
                <input className="btn btn-secondary bg-pink-700  mb-4 w-full" type="submit" value="Sign Up" />
              </form>
              {
                registerError && <p className="text-red-600 text-xl ">{registerError}</p>
              }
              {
                success && <p className="text-green-600 text-xl ">{success}

                  </p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLogin;
