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
    // await submitToMailChimp();

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
    <div className="flex items-start mx-auto w-2/4">
      <div className="mc-field-group flex-grow mr-5">
        {/* <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-white-700">Email Address <span className="text-red-600">*</span></label> */}
        <input
          type="email"
          name="EMAIL"
          className={`required email w-full p-2 text-white-700 bg-transparent border focus:outline-none ${!isValidEmail ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          id="mce-EMAIL"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email address'
        />
        {/* {!isValidEmail && <span className="text-red-500 text-xs">Please enter a valid email address.</span>} */}
        <span className="text-red-500 text-xs">{!isValidEmail && 'Please enter a valid email address.'}</span>
      </div>
      <button
        disabled={loading} // Disable button while loading
        onClick={handleSubmit}
        className="button bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded whitespace-nowrap"
        style={{marginTop: '1px'}}
      >
        {loading ? <div className="loader"></div> : success ? "✓" : "Keep me in the loop"}
      </button>
    </div>

  );
}

export default MailchimpForm;
