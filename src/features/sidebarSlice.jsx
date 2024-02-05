import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarCollapsed: false,
  isSideBarMobileCollapsed: false
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
    },
    sidebarMobileOpen: (state) => {
      state.isSideBarMobileCollapsed = true
    },
    sidebarMobileClose: (state) => {
      state.isSideBarMobileCollapsed = false
    }
  }
})

export const { 
  sidebarToggle, 
  sidebarOpen,
  sidebarMobileOpen,
  sidebarMobileClose
} = sidebarSlice.actions

export default sidebarSlice.reducer