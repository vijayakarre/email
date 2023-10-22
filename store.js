// import { createSlice, configureStore } from '@reduxjs/toolkit';

// // Initial state
// const initialState = {
//   emails: [], // Initialize 'emails' as an empty array
//   selectedEmail: null,
//   filter: 'all', // all, favorite, read, unread
// };

// // Define a slice for emails
// // const emailSlice = createSlice({
// //   name: 'email',
// //   initialState,
// //   reducers: {
// //     fetchEmails: (state, action) => {
// //       state.emails = action.payload;
// //     },
// //     selectEmail: (state, action) => {
// //       state.selectedEmail = action.payload;
// //     },
// //     toggleFavorite: (state, action) => {
// //       // Implement toggling email's favorite status in the emails array
// //     },
// //     filterEmails: (state, action) => {
// //       // Implement filtering based on filters in state
// //     },
// //   },
// // });

// const emailSlice = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_EMAILS_SUCCESS': // Handle the success action
//       return { ...state, emails: action.payload, selectedEmail: null };

//   }
// }
// const { reducer, actions } = emailSlice;
// export const { fetchEmails, selectEmail, markFavorite, filterEmails } = actions;

// // Create Redux store
// const store = configureStore({
//   reducer: {
//     emails: reducer,
//     // Define other reducers as needed
//   },
// });

// export default store;
// store.js
import {  combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import emailReducer from './Reducer'; // Import your reducers


const store = configureStore({
  reducer: emailReducer, // Pass your combined reducers here
  // Other store configuration options (middleware, devTools, etc.) go here
});

export default store;



