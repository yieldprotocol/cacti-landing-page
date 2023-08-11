const mailchimp = require("@mailchimp/mailchimp_marketing");

// Set Mailchimp configuration once
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

exports.handler = async (event, context) => {
    try {
        // Get email address from request body
        const { email } = JSON.parse(event.body);

        console.log('email in mailchimp.js', email  )

        // Mailchimp list id to add email to
        const listId = process.env.MAILCHIMP_LIST_ID;

        // Add email to list in Mailchimp
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: email,
            status: 'subscribed',
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (error) {
        console.error(error); // Log the error for debugging
        return {
            statusCode: 500,
            body: JSON.stringify({ message:`An error occurred while subscribing the email: ${error}`, listId: process.env.MAILCHIMP_LIST_ID }),
        };
    }
};
