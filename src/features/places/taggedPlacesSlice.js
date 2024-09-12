import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { taggedPlaces } from "../../data/places";

export const fetchAllTodos = createAsyncThunk(
    'todos/fetchAllTodos', async () => {
        const response = await axios.get('/todos');
        return response.data;
    }
)

export const addTodo = createAsyncThunk(
    'todos/pushTodo', async (todoObj) => {
        const response = await axios.post('/todos', todoObj);
        return response.data;
    }
)


let initialState = {
    data: taggedPlaces,
    status: 'idle',
    error: []
}

const taggedPlacesSlice = createSlice({
    name: 'taggedPlaces',
    initialState,
    reducers: {
        activate: (state, action) => {
            state.data.forEach(place => {
                if (place.type == action.payload)
                    place.current = true
                else
                    place.current = false
            })
        }
    },



    // extraReducers: (builder) => {
    //     builder.addCase(fetchAllTodos.pending, (state, action) => {
    //         state.status = 'loading'
    //     })

    //     builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
    //         state.data = action.payload;
    //         state.status = 'succeeded'
    //     })

    //     builder.addCase(fetchAllTodos.rejected, (state, action) => {
    //         state.error.push(action.error.message);
    //         state.status = 'failed'
    //     })

    //     builder.addCase(addTodo.pending, (state, action) => {
    //         console.log('loading');
    //         state.status = 'loading'
    //     })

    //     builder.addCase(addTodo.fulfilled, (state, action) => {
    //         state.status = 'succeeded'
    //         state.data.todos.push(action.payload.todo);
    //     })
    // }
})

export const { activate } = taggedPlacesSlice.actions

export default taggedPlacesSlice.reducer 