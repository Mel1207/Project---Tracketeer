import { configureStore } from '@reduxjs/toolkit'
import modalSlice from '../features/modalSlice'
import sidebarSlice from '../features/sidebarSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    sidebar: sidebarSlice
  }
})