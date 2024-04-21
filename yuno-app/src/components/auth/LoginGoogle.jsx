import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth ,provider} from '../../firebase-config';
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast,Bounce } from 'react-toastify';
const LoginGoogle = ({ onClick }) => {
    const handleGoogleSignIn = (e) => {
      e.preventDefault();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          localStorage.setItem('user', JSON.stringify({
            email: user.email,
            uid: user.uid,
          }));
          localStorage.setItem("informationUser", JSON.stringify({
            email: user.email,
            uid: user.uid,
          }));
          onClick(user)  
          toast.success('Login Success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        })
        .catch((err) => {
          console.log(err);
          toast.error('Login fail !!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        });
    };
    return (
      <div className="wrapper">
        <div className='box'>
        <ToastContainer />
              <button className='btn btn-danger btn-md'
                onClick={handleGoogleSignIn}>
                <FaGoogle/>
              </button>  
        </div>
      </div>
    );
}
export default LoginGoogle