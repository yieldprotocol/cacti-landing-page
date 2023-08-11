import React, { useState } from 'react';

function MailchimpForm() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [loading, setLoading] = useState(false); // Track loading state
  const [success, setSuccess] = useState(false); // Track success state

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true); // Start loading state

    // Validate email address
    if (!email || !isValidEmailFormat(email)) {
      setIsValidEmail(false);
      setLoading(false); // Stop loading state
      return;
    }

    // Reset validation status
    setIsValidEmail(true);

    // Submit email to MailChimp
    await submitToMailChimp();

    // Show success state briefly
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setLoading(false); // Stop loading state
    }, 1000); // Delay for 1 second to show checkmark
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

  const submitToMailChimp = async () => {
    try {
      const response = await fetch("/.netlify/functions/mailChimp", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()
      console.log('response from MC', data)
    } catch (error) {
      console.log('error from MC', error)
    }
  }

  return (
    <div className="flex flex-col md:flex-row sm:flex-col items-start mx-auto w-full md:w-3/5">
      <div className="mc-field-group flex-grow mx-auto w-full md:mr-5 mb-3 md:mb-0">
        <input
          type="email"
          name="EMAIL"
          className={`required email w-full p-2 text-black bg-white border focus:outline-none ${!isValidEmail ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          id="mce-EMAIL"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email address'
        />
        <span className="text-red-500 text-xs">{!isValidEmail && 'Please enter a valid email address.'}</span>
      </div>
      <button
        disabled={loading} // Disable button while loading
        onClick={handleSubmit}
        className="button bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded whitespace-nowrap mx-auto"
        style={{marginTop: '1px'}}
      >
        {loading ? <div className="loader"></div> : success ? "✓" : "Keep me in the loop"}
      </button>
    </div>
  );
}

export default MailchimpForm;
