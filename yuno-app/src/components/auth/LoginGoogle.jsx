import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import { auth ,provider} from '../../firebase-config';
import { FaGoogle } from "react-icons/fa";

const LoginGoogle = ({ onClick }) => {
    const handleGoogleSignIn = (e) => {
      e.preventDefault();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          localStorage.setItem('user', JSON.stringify({
            email: user.email,
            uid: user.uid,
            accessToken: user.accessToken,
            phoneNumber: user.phoneNumber,
            displayName: user.displayName,
          }));
          console.log(user);
          onClick(user)  
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="wrapper">
        <div className='box'>
              <button className='btn btn-danger btn-md'
                onClick={handleGoogleSignIn}>
                <FaGoogle/>
              </button>  
        </div>
      </div>
    );
}
export default LoginGoogle