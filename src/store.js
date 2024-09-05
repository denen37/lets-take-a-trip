import { configureStore } from '@reduxjs/toolkit'
import easyVisaReducer from './features/places/easyVisaSlice'

export const store = configureStore({
    reducer: {
        easyVisas: easyVisaReducer,
    },
})