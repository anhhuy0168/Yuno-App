import React from 'react'
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth ,provider} from '../../firebase-config';
import { useNavigate } from "react-router-dom";

const LoginGoogle = () => {
  const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const handleGoogleSignIn=()=>{
      signInWithPopup(auth, provider).then((result)=>{
        const user = result.user;
        localStorage.setItem('user', JSON.stringify({
          email: user.email,
          uid: user.uid,
          accessToken: user.accessToken
        }));
        setUser(user);
        navigate("/")
      }).catch((err)=>{
        console.log(err);
      })
    }
    const handleLogout=()=>{
      setUser(null);
    }
  
    return (
      <div className="wrapper">
        <div className='box'>
            {user?(
              <>
                <button className='btn btn-secondary btn-md'
                  onClick={handleLogout}>
                  LOGOUT
                </button>
                <h3>Welcome {user.displayName}</h3>
                <p>{user.email}</p>
                <div className='photo'>
                  <img src={user.photoURL} alt="dp" referrerPolicy='no-referrer'/>
                </div>
              </>
            ):(
              <button className='btn btn-danger btn-md'
                onClick={handleGoogleSignIn}>
                Sign In With Google
              </button>  
            )} 
        </div>
      </div>
    );
}

export default LoginGoogle