// reducers/emails.js

import {
  FETCH_EMAILS_REQUEST,
  FETCH_EMAILS_SUCCESS,
  FETCH_EMAILS_FAILURE,
  SELECT_EMAIL,
  MARK_AS_FAVORITE,
  MARK_AS_READ,
} from './actions';

const initialState = {
  emails: [], // Initialize as an empty array
  selectedEmail: null,
  loading: false,
  error: null,
};


const emailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMAILS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_EMAILS_SUCCESS:
      return { ...state, loading: false, emails: action.payload };

    case FETCH_EMAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SELECT_EMAIL:
      return { ...state, selectedEmail: action.payload };

    case MARK_AS_FAVORITE:
      const updatedEmails = state.emails.map((email) =>
        email.id === action.payload
          ? { ...email, favorite: !email.favorite }
          : email
      );
      return { ...state, emails: updatedEmails };

    case MARK_AS_READ:
      const markedAsReadEmails = state.emails.map((email) =>
        email.id === action.payload ? { ...email, read: true } : email
      );
      return { ...state, emails: markedAsReadEmails };

    default:
      return state;
  }
};

export default emailsReducer;
