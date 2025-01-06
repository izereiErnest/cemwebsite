const express = require('express');
const axios = require('axios');
const uuid = require('uuid'); // For generating unique transaction IDs
const app = express();
app.use(express.json());

// Replace with your MTN credentials
const subscriptionKey = '16065e2afcda427c9be51a4f9c0d3b1';
const apiUser = '557fd1bc-9e26-46ea-8dae-3dc3b7770c2';
const apiKey = 'd883748638284764bf399136f7464fe';

// Route to handle root path
app.get('/', (req, res) => {
    res.send('Welcome to the MTN Donation API!');
});

// Helper function: Generate Access Token
const getAccessToken = async () => {
    const auth = Buffer.from(`${apiUser}:${apiKey}`).toString('base64');
    const response = await axios.post('https://sandbox.momodeveloper.mtn.com/collection/token/', null, {
        headers: {
            Authorization: `Basic ${auth}`,
            'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
    });
    return response.data.access_token;
};

// Helper function: Request to Pay
const requestToPay = async (accessToken, amount) => {
    const transactionId = uuid.v4();
    const payerNumber = '250791236300'; // Your receiver's fixed number

    await axios.post(
        'https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay',
        {
            amount: amount.toString(),
            currency: 'RWF',
            externalId: transactionId,
            payer: { partyIdType: 'MSISDN', partyId: payerNumber },
            payerMessage: 'Donation',
            payeeNote: 'Thank you for donating!',
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'X-Reference-Id': transactionId,
                'Content-Type': 'application/json',
            },
        }
    );

    return transactionId;
};

// Backend API: Handle Donation Request
app.post('/donate', async (req, res) => {
    const { amount } = req.body; // Get donation amount from frontend

    if (amount <= 0) {
        return res.status(400).json({ message: 'Amount must be positive.' });
    }

    try {
        const accessToken = await getAccessToken(); // Step 1: Get token
        const transactionId = await requestToPay(accessToken, amount); // Step 2: Request payment
        res.status(200).json({ message: 'Request sent successfully', transactionId });
    } catch (error) {
        console.error('Error processing donation:', error.response?.data || error.message);
        res.status(500).json({ message: 'Something went wrong. Please try again.' });
    }
});

// Start Backend Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
