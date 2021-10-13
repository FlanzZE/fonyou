import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './reducer';
const store = configureStore({
  reducer: {
    charactersData: charactersReducer
  },
});
export default store