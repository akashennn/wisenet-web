import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TCategory, TSidebarCategories } from '../types';

const BASE_ENDPOINT = "/graphql";

const COMMON_HEADERS = {
    "Content-Type": "application/json"
};

interface InitialState {
    // sidebar component
    isSidebarCategoriesLoading: boolean;
    sidebarCategories: TSidebarCategories[];
    activeCategoryId: number;

    // product listing page
    isCategoryLoading: boolean;
    category: TCategory | null;
    searchText: string;
}

const initialState: InitialState = {
    // sidebar component
    isSidebarCategoriesLoading: false,
    sidebarCategories: [],
    activeCategoryId: 1,

    // product listing page
    isCategoryLoading: false,
    category: null,
    searchText: '',
}

// fetch all categories for sidebar
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

// fetch active category
export const getCategory = createAsyncThunk('categories/getCategory', async (activeCategoryId: number) => {
    const graphqlQuery = {
        "operationName": "getCategory",
        "query": `query getCategory {
            category(id:${activeCategoryId}) {
              id
              name
              articleCount
              articles {
                id
                name
                variantName
                prices {
                  currency
                  value
                }
                images {
                  path
                }
              }
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
    return data.data.category;
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSearchText: (state, { payload }) => {
            state.searchText = payload;
        },
    },
    extraReducers: builder => {
        builder
            // getAllSidebarCategories
            .addCase(getAllSidebarCategories.pending, (state) => {
                state.isSidebarCategoriesLoading = true;
            })
            .addCase(getAllSidebarCategories.fulfilled, (state, { payload }) => {
                state.isSidebarCategoriesLoading = false;
                state.sidebarCategories = payload;
            })
            .addCase(getAllSidebarCategories.rejected, (state, { payload }) => {
                state.isSidebarCategoriesLoading = false;
                console.error('getAllSidebarCategories.rejected', payload);
            })

            // getCategory
            .addCase(getCategory.pending, (state) => {
                state.isCategoryLoading = true;

                // reset search text
                state.searchText = '';
            })
            .addCase(getCategory.fulfilled, (state, { payload }) => {
                console.log('payload', payload)
                state.isCategoryLoading = false;
                state.category = payload;

                // graphQL returns null when categoryId is invalid
                state.activeCategoryId = payload?.id;
            })
            .addCase(getCategory.rejected, (state, { payload }) => {
                state.isCategoryLoading = false;
                console.error('getCategory.rejected', payload);
            })
    }
});

export const { setSearchText } = categoriesSlice.actions;

export default categoriesSlice.reducer;