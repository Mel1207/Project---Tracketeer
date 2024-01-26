import iconHome from '../assets/icon-home.svg'
import iconTransactionHistory from '../assets/icon-transaction-history.svg'
import iconIncomeHistory from '../assets/icon-income-history.svg'
import iconExpenseHistory from '../assets/icon-expense-history.svg'

export const sidebarLinks = [
  {
    id: 1,
    title: 'Dashboard',
    isActive: true,
    iconSrc: iconHome,
    linkPath: '/dashboard'
  },
  {
    id: 2,
    title: 'Transaction History',
    isActive: true,
    iconSrc: iconTransactionHistory,
    linkPath: '/transaction-history'
  },
  {
    id: 3,
    title: 'Income History',
    isActive: true,
    iconSrc: iconIncomeHistory,
    linkPath: '/income-history'
  },
  {
    id: 4,
    title: 'Expense History',
    isActive: true,
    iconSrc: iconExpenseHistory,
    linkPath: '/expense-history'
  },
]