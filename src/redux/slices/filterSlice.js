import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    caregoryId:0,
    orderBy:"desc",
    sortType:{
        name:'Популярності',
        sortProperty: 'rating'
    },
    searchValue: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state,action) => {
            state.caregoryId = action.payload;
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload;
        },
        setSortType: (state, action) => {
            state.sortType = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    },
})

export const {  setSearchValue,setCategoryId, setOrderBy, setSortType} = filterSlice.actions

export default filterSlice.reducer