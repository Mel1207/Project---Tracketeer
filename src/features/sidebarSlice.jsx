import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarCollapsed: false
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    sidebarToggle: (state) => {
      state.isSideBarCollapsed = !state.isSideBarCollapsed
    },
    sidebarOpen: (state) => {
      state.isSideBarCollapsed = false
    }
  }
})

export const { 
  sidebarToggle, 
  sidebarOpen
} = sidebarSlice.actions

export default sidebarSlice.reducer