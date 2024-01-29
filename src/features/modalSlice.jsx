import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
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
    }
  }
})

export const {
  modalOpen, 
  modalClose
} = modalSlice.actions

export default modalSlice.reducer