import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TSidebarCategory } from '../types';

interface InitialState {
    isLoading: boolean;
    sidebarCategories: TSidebarCategory[];
}

const initialState: InitialState = {
    isLoading: false,
    sidebarCategories: [],
}

const baseEndpoint = "/graphql";

const commonHeaders = {
    "Content-Type": "application/json"
};

export const getAllCategories = createAsyncThunk('categories/getAllCategories', async () => {
    const graphqlQuery = {
        "operationName": "fetchCategories",
        "query": `query fetchCategories {
            categories {
              id
              name
              urlPath
            }
          }`,
        "variables": {}
    };

    const options = {
        "method": "POST",
        "headers": commonHeaders,
        "body": JSON.stringify(graphqlQuery)
    };

    const response = await fetch(baseEndpoint, options);
    const data = await response.json();
    return data.data.categories;
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // setCategories: (state, action) => {
        //     state.data.push(action.payload);
        // },
    },
    extraReducers: builder => {
        builder
            .addCase(getAllCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.sidebarCategories = payload;
            })
            .addCase(getAllCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                console.error('getAllCategories.rejected', payload);
            })
    }
});

export default categoriesSlice.reducer;