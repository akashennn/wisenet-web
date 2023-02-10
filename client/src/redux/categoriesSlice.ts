import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TSidebarCategory } from '../types';

const BASE_ENDPOINT = "/graphql";

const COMMON_HEADERS = {
    "Content-Type": "application/json"
};

interface InitialState {
    isLoading: boolean;
    sidebarCategories: TSidebarCategory[];
}

const initialState: InitialState = {
    isLoading: false,
    sidebarCategories: [],
}

export const getAllSidebarCategories = createAsyncThunk('categories/getAllSidebarCategories', async () => {
    const graphqlQuery = {
        "operationName": "getAllSidebarCategories",
        "query": `query getAllSidebarCategories {
            categories {
              id
              name
              urlPath
            }
          }`,
        "variables": {}
    };

    const response = await fetch(BASE_ENDPOINT, {
        "method": "POST",
        "headers": COMMON_HEADERS,
        "body": JSON.stringify(graphqlQuery)
    });
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
            .addCase(getAllSidebarCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllSidebarCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.sidebarCategories = payload;
            })
            .addCase(getAllSidebarCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                console.error('getAllSidebarCategories.rejected', payload);
            })
    }
});

export default categoriesSlice.reducer;