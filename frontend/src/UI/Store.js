import loginReducer from './Reducer/loginSlice'; // Import your reducer
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      login: loginReducer, // Add your reducer to the store
    }
  }); 
export default store;