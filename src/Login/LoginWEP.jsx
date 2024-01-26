import { signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import auth from "../FIREBASE/firebase.init";
import { useRef, useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const LoginWEP = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassField, setShowPassField] = useState(false);
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value; 
    const password = e.target.password.value;

    if(password.length < 6){
      setRegisterError('Password cannot be less than 6 characters');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Password should have at least one uppercase character');
      return;
    }

    // Reset Success
    setSuccess('');
    // Reset Error
    setRegisterError('');

    // Login with Email 
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess(`You are logged in as ${email}`);
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  const handleResetPassword = () =>{

      const email = emailRef.current.value;
      
      sendPasswordResetEmail(auth, email)
      .then( () => {
        setSuccess(`Reset Request send to ${email}, please check your email`);
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-base-200 mt-10npm ">
      <div className="hero ">
        <div className="hero-content flex flex-col items-center lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              {registerError && <p className="text-red-600 text-xl ">{registerError}</p>}
              {success && <p className="text-green-600 text-xl ">{success}</p>}
            </p>
          </div>

          <div className="card shrink-0 p-3 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="form-control relative">
              <form onSubmit={handleLogin}>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered w-full" required />

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div>
                  <input type={showPassField ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                  <span className="absolute text-2xl pl-3 pt-3 right-3" onClick={() => setShowPassField(!showPassField)}>
                    {showPassField ? <IoEyeOffSharp /> : <IoEye />}
                  </span>
                </div>

                <label className="label">
                  <a onClick={handleResetPassword} className="label-text-alt link link-hover pt-4 pb-1">
                    Forgot password?
                  </a>
                </label>

               
                <input className="btn btn-secondary bg-emerald-500  mb-4 w-full" type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWEP;
