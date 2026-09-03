import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { mobileMenuOpen: false, donationAmount: 50 },
  reducers: {
    toggleMobileMenu: (state) => { state.mobileMenuOpen = !state.mobileMenuOpen },
    closeMobileMenu: (state) => { state.mobileMenuOpen = false },
    setDonationAmount: (state, action) => { state.donationAmount = action.payload },
  },
})

export const { toggleMobileMenu, closeMobileMenu, setDonationAmount } = uiSlice.actions
export default uiSlice.reducer