import React from 'react'
import { auth } from '../../firebase-config'
import { sendPasswordResetEmail } from 'firebase/auth'
const ChangePass = () => {
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value
        console.log(emalVal);
        sendPasswordResetEmail(auth,emalVal).then(data=>{
            alert("check your email")
        }).catch(err=>{
            alert(err)
        });
    }
  return (  
    <>
    <div>ChangePass</div>
    <form onSubmit={(e)=> handleSubmit(e)}>
        <input name="email" placeholder='Enter email'></input><br /><br />
        <button>Reset</button>
    </form>
    </>
    
  )
}

export default ChangePass