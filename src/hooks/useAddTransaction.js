import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { useGetUserInfo } from './useGetUserInfo'

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions")
  const { userId } = useGetUserInfo()
  
  // const createTs = serverTimestamp()
  // const dateObj = new Date(createTs)

  // const getYear = dateObj.getFullYear()
  // const getMonth = dateObj.getMonth()
  // const getDay = dateObj.getDate()

  const addTransaction = async ({ 
      transactionDescription, 
      transactionAmount, 
      transactionType 
    }) => {
    await addDoc(transactionCollectionRef, {
      userID: userId,
      transactionDescription,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp()
    })
  }

  return {addTransaction}
}