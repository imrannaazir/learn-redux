import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../states/counter/counter.slice"
export default configureStore({
    reducer: {
        counter: counterReducer
    },
})