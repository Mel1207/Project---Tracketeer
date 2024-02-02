import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  isLogOut: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isModalOpen = true
    },
    modalClose: (state) => {
      state.isModalOpen = false
    },
    modalLogOutOpen: (state) => {
      state.isLogOut = true
    },
    modalLogOutClose: (state) => {
      state.isLogOut = false
    }
  }
})

export const {
  modalOpen, 
  modalClose,
  modalLogOutOpen,
  modalLogOutClose
} = modalSlice.actions

export default modalSlice.reducer