import React from 'react'
import iconGoogle from '../../assets/icon-google.svg'
import { auth, provider } from '../../config/firebase-config' 
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()

  const handleSignInGoogle = async () => {
    const results = await signInWithPopup(auth, provider)
    const authInfo = {
      userId: results.user.uid,
      name: results.user.displayName,
      avatar: results.user.photoURL,
      isAuth: true
    }

    // SET LOCAL STORAGE
    localStorage.setItem('auth', JSON.stringify(authInfo))
    navigate('/dashboard')
  }

  return (
    <div className='login-page'>
      <div>

      </div>
      <div>
        <h1>Welcome back Tracketeer 👋</h1>
        <button onClick={handleSignInGoogle}><img src={iconGoogle} alt="google icon" />Sign in with Google</button>
      </div>
      
    </div>
  )
}

export default Auth