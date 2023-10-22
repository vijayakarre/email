// actions/emails.js

import axios from 'axios';

export const FETCH_EMAILS_REQUEST = 'FETCH_EMAILS_REQUEST';
export const FETCH_EMAILS_SUCCESS = 'FETCH_EMAILS_SUCCESS';
export const FETCH_EMAILS_FAILURE = 'FETCH_EMAILS_FAILURE';
export const SELECT_EMAIL = 'SELECT_EMAIL';
export const MARK_AS_FAVORITE = 'MARK_AS_FAVORITE';
export const MARK_AS_READ = 'MARK_AS_READ';

const apiBaseUrl = 'https://flipkart-email-mock.now.sh';

export const fetchEmails = () => {

  return async (dispatch) => {
    dispatch({ type: FETCH_EMAILS_REQUEST });
    console.log('fetchEmail..');
    try {
      const response = await axios.get(`${apiBaseUrl}`);
      dispatch({ type: FETCH_EMAILS_SUCCESS, payload: response.data.emails });

    } catch (error) {
      dispatch({ type: FETCH_EMAILS_FAILURE, payload: error });
    }
  };
};

export const selectEmail = (emailId) => {
  return { type: SELECT_EMAIL, payload: emailId };
};

export const markAsFavorite = (emailId) => {
  return { type: MARK_AS_FAVORITE, payload: emailId };
};

export const markAsRead = (emailId) => {
  return { type: MARK_AS_READ, payload: emailId };
};
