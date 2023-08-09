import React, { useState } from 'react';

function MailchimpForm() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Validate email address
    if (!email || !isValidEmailFormat(email)) {
      setIsValidEmail(false);
      event.preventDefault(); // Prevent form submission
      return;
    }

    // Reset validation status
    setIsValidEmail(true);

    // Allow form submission to proceed
  };

  const isValidEmailFormat = (email: string) => {
    // Use a regular expression to validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const styles = {
    form: {
      color: 'black'
    },
    submitButton: {
      backgroundColor: 'green',
      color: 'white'
    },
    errorMessage: {
      color: 'red'
    }
  }

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://yield.us8.list-manage.com/subscribe/post?u=ba7359e990d89455a1c9be0e2&amp;id=7030e0c3a4&amp;f_id=001f79e0f0"
          method="post"
          className="validate"
          target="_self"
          noValidate
          onSubmit={handleSubmit} // Attach the handleSubmit function to the form submission event
          style={styles.form}
        >
          <div id="mc_embed_signup_scroll">
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
              <input
                type="email"
                name="EMAIL"
                className={`required email ${!isValidEmail ? 'error' : ''}`}
                id="mce-EMAIL"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isValidEmail && <span className="error-message" style={styles.errorMessage}>Please enter a valid email address.</span>}
            </div>
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
                style={styles.submitButton}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MailchimpForm;
