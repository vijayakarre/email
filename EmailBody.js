// components/EmailBody.js

import React from 'react';
import { connect } from 'react-redux';
import { markAsFavorite, markAsRead } from './actions';

const EmailBody = ({ email, markAsFavorite, markAsRead }) => {
  if (!email) {
    return <div>Please select an email to view.</div>;
  }

  return (
    <div>
      <h1>EmailBody</h1>
      <h2>{email.subject}</h2>
      <p>{email.body}</p>
      <p>Date and Time: {email.dateTime}</p>
      <button onClick={() => markAsFavorite(email.id)}>
        {email.favorite ? 'Unmark as Favorite' : 'Mark as Favorite'}
      </button>
      <button onClick={() => markAsRead(email.id)}>Mark as Read</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const selectedEmailId = state.selectedEmail;
  const selectedEmail = Array.isArray(state.emails)
    ? state.emails.find((email) => email.id === selectedEmailId)
    : null; // Handle the case where emails is not an array
  return { email: selectedEmail };
};



export default connect(mapStateToProps, { markAsFavorite, markAsRead })(EmailBody);
