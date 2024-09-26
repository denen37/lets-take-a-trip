import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { easyVisaObj } from "../../data/places";

export const fetchAllEasyVisas = createAsyncThunk(
    'easyVisas/fetchAllEasyVisas', async () => {
        const response = await axios.get('/easyvisa');
        //console.log(response.data);
        return response.data;
    }
)

// export const addTodo = createAsyncThunk(
//     'todos/pushTodo', async (todoObj) => {
//         const response = await axios.post('/todos', todoObj);
//         return response.data;
//     }
// )


let initialState = {
    data: [],
    status: 'idle',
    error: []
}

const easyVisaSlice = createSlice({
    name: 'easyVisa',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllEasyVisas.pending, (state, action) => {
            state.status = 'loading'
        })

        builder.addCase(fetchAllEasyVisas.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'succeeded'
        })

        builder.addCase(fetchAllEasyVisas.rejected, (state, action) => {
            state.error.push(action.error.message);
            state.status = 'failed'
        })

        // builder.addCase(addTodo.pending, (state, action) => {
        //     console.log('loading');
        //     state.status = 'loading'
        // })

        // builder.addCase(addTodo.fulfilled, (state, action) => {
        //     state.status = 'succeeded'
        //     state.data.todos.push(action.payload.todo);
        // })
    }
})

export const { } = easyVisaSlice.actions

export default easyVisaSlice.reducer