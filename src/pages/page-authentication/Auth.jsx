import React from 'react'
import iconGoogle from '../../assets/icon-google.svg'
import { auth, provider } from '../../config/firebase-config' 
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import bgLogin from '../../assets/img-login-bg.jpg'
import loginLogo from '../../assets/icon-login.png'

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
      <img src={bgLogin} alt="Login Background" className='login-left'/>
      <div className='login-right'>
        <div className='login-container'>
          <img src={loginLogo} alt="Logo" className='login-logo'/>
          <h1>Welcome back Tracketeer 👋</h1>
          <button onClick={handleSignInGoogle} className='btn google-login'><img src={iconGoogle} alt="google icon" />Sign in with Google</button>
        </div>
      </div>
      
    </div>
  )
}

export default Auth