import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { useGetUserInfo } from './useGetUserInfo'

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions")
  const { userId } = useGetUserInfo()

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