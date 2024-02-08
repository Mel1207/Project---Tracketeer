import iconHome from '../assets/icon-home.svg'
import iconTransactionHistory from '../assets/icon-transaction-history.svg'
import iconIncomeHistory from '../assets/icon-income-history.svg'
import iconExpenseHistory from '../assets/icon-expense-history.svg'
import iconHomeActive from '../assets/iconHomeActive.svg'
import iconTransactionActive from '../assets/icon-transaction-active.svg'
import iconIncomeActive from '../assets/icon-income-active.svg'
import iconExpenseActive from '../assets/icon-expense-active.svg'

export const sidebarLinks = [
  {
    id: 1,
    title: 'Dashboard',
    isActive: true,
    iconSrc: iconHome,
    iconSrcActive: iconHomeActive,
    linkPath: '/dashboard'
  },
  {
    id: 2,
    title: 'Transaction History',
    isActive: true,
    iconSrc: iconTransactionHistory,
    iconSrcActive: iconTransactionActive,
    linkPath: '/transaction-history'
  },
  {
    id: 3,
    title: 'Income History',
    isActive: true,
    iconSrc: iconIncomeHistory,
    iconSrcActive: iconIncomeActive,
    linkPath: '/income-history'
  },
  {
    id: 4,
    title: 'Expense History',
    isActive: true,
    iconSrc: iconExpenseHistory,
    iconSrcActive: iconExpenseActive,
    linkPath: '/expense-history'
  },
]