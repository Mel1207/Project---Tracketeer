import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { db } from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const transactionCollectionRef = collection(db, "transactions")
  const { userId } = useGetUserInfo()
  const [transactionsTotal, setTransactionsTotal] = useState({
    balance: 0.0,
    income: 0.0,
    expense: 0.0
  })

  const getTransactions = async () =>{
    let unsbscribe

    try {
      const queryTransactions = query(transactionCollectionRef, where("userID", "==", userId))
      orderBy('createdAt')

      unsbscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = []
        let totalIncome = 0
        let totalExpense = 0

        snapshot.forEach(doc => {
          const data = doc.data()
          const id = doc.id

          docs.push({...data, id})

          if(data.transactionType === 'expense') {
            totalExpense += Number(data.transactionAmount)
          } else {
            totalIncome +=  Number(data.transactionAmount)
          }
        })

        setTransactions(docs)

        let totalBalance = totalIncome - totalExpense
        setTransactionsTotal({
          balance: totalBalance,
          income: totalIncome,
          expense: totalExpense
        })
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
    transactions, transactionsTotal
  }
}