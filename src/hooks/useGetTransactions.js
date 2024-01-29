import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { db } from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const transactionCollectionRef = collection(db, "transactions")
  const { userId } = useGetUserInfo()

  const getTransactions = async () =>{
    let unsbscribe

    try {
      const queryTransactions = query(transactionCollectionRef, where("userID", "==", userId))
      orderBy('createdAt')

      unsbscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = []

        snapshot.forEach(doc => {
          const data = doc.data()
          const id = doc.id

          docs.push({...data, id})
        })

        setTransactions(docs)
      })
    } catch (error) {
      console.log(error)
    }

    return () => unsbscribe()
  }

  useEffect(() => {
    getTransactions()
  }, [])


  return {
    transactions
  }
}