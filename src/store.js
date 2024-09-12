import { configureStore } from '@reduxjs/toolkit'
import easyVisaReducer from './features/places/easyVisaSlice'
import taggedPlacesReducer from './features/places/taggedPlacesSlice'

export const store = configureStore({
    reducer: {
        easyVisas: easyVisaReducer,
        taggedPlaces: taggedPlacesReducer
    },
})