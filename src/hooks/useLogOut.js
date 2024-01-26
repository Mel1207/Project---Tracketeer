import { auth } from "../config/firebase-config"
import { signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom"


export const useLogOut = () => {
  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      localStorage.clear()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return {
    logOut
  }
}