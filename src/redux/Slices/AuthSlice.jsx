import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: [],
    reducers: {
        login: (state, action)=>{
            
        },

        logout: ()=>{

        } 
    }
});

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;