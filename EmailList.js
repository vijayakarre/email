// components/EmailList.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmails, selectEmail } from './actions';

const EmailList = ({ emails, loading, error, fetchEmails, selectEmail }) => {
  useEffect(() => {
    fetchEmails();
  }, [fetchEmails]);

  return (
    <div>
      <h1>Emaillist</h1>
      {loading && <p>Loading emails...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {/* {emails.map((email) => (
          <li key={email.id}>
            <div onClick={() => selectEmail(email.id)}>
              <strong>{email.sender}</strong> - {email.subject}
              {email.favorite && <span> (Favorite)</span>}
              {!email.read && <span> (Unread)</span>}
            </div>
          </li>
        ))} */}
        {emails ? (
  <ul>
    {emails.map((email) => (
     <div>
      <li key={email.id}>
            <div onClick={() => selectEmail(email.id)}>
              <strong>{email.sender}</strong> - {email.subject}
              {email.favorite && <span> (Favorite)</span>}
              {!email.read && <span> (Unread)</span>}
            </div>
          </li>
     </div>
    ))}
  </ul>
) : (
  <p>Loading emails...</p>
)}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    emails: state.emails,
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchEmails, selectEmail })(EmailList);
