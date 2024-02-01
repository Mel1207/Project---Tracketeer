import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { useGetUserInfo } from './useGetUserInfo'

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions")
  const { userId } = useGetUserInfo()

  const currentDate = new Date();

  const year = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}/${month}/${day}`

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
      dateTs: formattedDate,
      createdAt: serverTimestamp()
    })
  }

  return {addTransaction}
}